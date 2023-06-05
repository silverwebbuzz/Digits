import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { RegisterDTO } from '../../dto/authDto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/dto/authDto/login.dto';
import { Payload } from 'src/interfaces/payload.interface';
import { ChangePasswordDTO } from 'src/dto/authDto/changePassword.dto';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
import { CommonMethods } from 'src/utilities/common-methods';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async create(res: Response, RegisterDTO: RegisterDTO) {
    const { email } = RegisterDTO;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      const createdUser = new this.userModel(RegisterDTO);
      await createdUser.save();
      return this.sanitizeUser(createdUser);
    } else {
      return CommonMethods.error(res, 'Email already exists');
    }
  }
  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.userModel.findOne({ email });
  }

  async findByLogin(res: Response, UserDTO: LoginDTO) {
    const { email, password } = UserDTO;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return CommonMethods.error(res, 'User not registered');
    }
    if (await bcrypt.compare(password, user.password)) {
      //{
      await (await user.save()).$set({ last_login: Date.now() });
      return this.sanitizeUser(user);
      //return { user };
    } else {
      return CommonMethods.error(res, 'Invalid Credentials');
    }
  }
  sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized['password'];
    return sanitized;
  }

  async changePassword(
    res: Response,
    userID: string,
    changePasswordDTO: ChangePasswordDTO,
  ) {
    const validation =
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

    const password = await this.hashPassword(changePasswordDTO.password);

    if (changePasswordDTO.password.match(validation)) {
      const user = await this.userModel.findByIdAndUpdate(userID, { password });
      if (!user) {
        return CommonMethods.error(res, 'User does not exists');
      } else {
        return CommonMethods.success(
          res,
          'Password Changed successfully',
          user,
        );
      }
    } else {
      return CommonMethods.error(res, 'Weak password');
    }
  }
}
