import {
  Res,
  Put,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RegisterDTO } from 'src/dto/authDto/register.dto';
import { UserService } from 'src/service/auth/user.service';
import { AuthService } from '../service/auth/auth.service';
import { LoginDTO } from '../dto/authDto/login.dto';
import { ChangePasswordDTO } from 'src/dto/authDto/changePassword.dto';
import { User } from 'src/interfaces/user.interface';
import { CommonMethods } from 'src/utilities/common-methods';
// import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('/onlyauth')
  @UseGuards(AuthGuard('jwt'))
  async hiddenInformation() {
    return 'hidden information';
  }
  @Get('/anyone')
  async publicInformation() {
    return 'this can be seen by anyone';
  }

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Res() res, @Body() registerDTO: RegisterDTO) {
    const user = await this.userService.create(res, registerDTO);
    const payload = {
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    //return { user, token };
    return CommonMethods.auth(res, 'Register successfully', user, token);
  }
  @Post('login')
  async login(@Res() res, @Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(res, loginDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    //const data = { user, token };

    if (user.user_type == 1 || user.user_type == 2) {
      const permission = [
        'dashboard',
        'admins',
        'admin-details',
        'plates',
        'plate-details',
        'users',
        'user-details',
        'verification',
        'runner',
        'runner-details',
        'runner-assignments',
        'demo',
      ];
      const data = { user, permission };
      return CommonMethods.auth(res, 'Login successful', data, token);
    } else if (user.user_type == 3) {
      const permission = ['runner-profile', 'assignments', 'demo'];
      const data = { user, permission };
      return CommonMethods.auth(res, 'Login successful', data, token);
    } else {
      return CommonMethods.error(res, 'Invalid Credentials');
    }
  }
  @Get('logout')
  async logout(@Res() res) {
    return CommonMethods.success(res, 'Logged out Successfully', []);
  }

  @Put('/changepassword')
  @UsePipes(ValidationPipe)
  async changepassword(
    @Res() res,
    @Body('userID') userID,
    @Body() changePasswordDTO: ChangePasswordDTO,
  ) {
    return await this.userService.changePassword(
      res,
      userID,
      changePasswordDTO,
    );
  }
}
