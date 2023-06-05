import { Injectable, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/interfaces/user.interface';
import { UserManagementDTO } from 'src/dto/userManagement.dto';
import { CommonMethods } from 'src/utilities/common-methods';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const base64ToImage = require('base64-to-image');
import { QueryOptions } from '../plateManagement/paginationDto';
import { DeleteUserDto } from 'src/dto/deleteUser.dto';

@Injectable()
export class UserManagementService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  // fetch all users
  async getAllUser(res: Response, options: QueryOptions): Promise<User[]> {
    let filterStatus: any;
    const page = options.page || 1;
    const limit = options.limit || 20;
    switch (options.filterBy) {
      case 'All':
        filterStatus = '';
        break;
      case 'Malaysian':
        filterStatus = 'Malaysian';
        break;
      case 'Company':
        filterStatus = null;
        break;
      case 'Foreigner':
        filterStatus = 'Foreigner';
        break;
      default:
        filterStatus = '';
        break;
    }
    const usersData = this.userModel
      .aggregate([
        {
          $match: { $or: [{ user_type: 4 }, { user_type: 5 }] },
        },
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    email: { $regex: options.search, $options: 'i' },
                  },
                  { name: { $regex: options.search, $options: 'i' } },
                  { phone: { $regex: options.search, $options: 'i' } },
                  {
                    category: { $regex: options.search, $options: 'i' },
                  },
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    category: filterStatus,
                  },
            ],
          },
        },
      ])
      .sort({ created_at: -1 });
    // .skip((Number(page) - 1) * Number(limit))
    // .limit(Number(limit))
    // .exec();
    // let users;
    let users = await usersData
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .exec();
    // const data = await usersData.count('data');
    // const totalRecord = data[0]['data'];
    const totalUser = await this.userModel
      .find({
        $or: [{ user_type: 4 }, { user_type: 5 }],
      })
      .count();

    if (options.filterBy === 'Last Online') {
      users = await this.userModel
        .find({ $or: [{ user_type: 4 }, { user_type: 5 }] })
        .sort({ last_login: -1 })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));
    }
    // users ? users : user;
    if (users.length) {
      return CommonMethods.success(res, 'Users List fetched successfully', {
        users,
        filterCount: users.length,
        totalRecord: totalUser,
      });
    } else {
      return CommonMethods.error(res, 'No users exists');
    }
  }
  // Get a single user
  async getUser(res: Response, userID): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    if (user) {
      return CommonMethods.success(res, 'Success', user);
    } else {
      return CommonMethods.error(res, 'User does not exists');
    }
  }
  // post a single User
  async addUser(
    res: Response,
    userManagementDTO: UserManagementDTO,
  ): Promise<User> {
    const { email } = userManagementDTO;
    const user = await this.userModel.findOne({ email });
    const newUser = await new this.userModel(userManagementDTO);
    if (!user) {
      await newUser.save();
      return CommonMethods.success(res, 'User Created', newUser);
    } else {
      return CommonMethods.error(res, 'Already Exists');
    }
  }
  // Edit User details
  async updateUser(
    res: Response,
    userID,
    userManagementDTO: UserManagementDTO,
  ): Promise<User> {
    const { email } = userManagementDTO;
    const checkUser = await this.userModel.findById(userID);
    const checkEmail = await this.userModel.findOne({ email });
    const data = checkEmail ? checkEmail.email : null;
    const data1 = checkUser ? checkUser.email : null;

    if (data1 === data) {
      if (checkUser) {
        const updatedUser = await this.userModel.findByIdAndUpdate(
          userID,
          userManagementDTO,
          {
            new: true,
          },
        );
        await (await updatedUser.save()).$set({ updated_at: Date.now() });

        return CommonMethods.success(
          res,
          'User edited successfully',
          updatedUser,
        );
      } else {
        return CommonMethods.error(res, 'User does not exists');
      }
    } else if (!checkUser) {
      return CommonMethods.error(res, 'User does not exists');
    } else {
      if (!checkEmail) {
        const updatedUser = await this.userModel.findByIdAndUpdate(
          userID,
          userManagementDTO,
          {
            new: true,
          },
        );
        await (await updatedUser.save()).$set({ updated_at: Date.now() });
        return CommonMethods.success(
          res,
          'User edited successfully',
          updatedUser,
        );
      } else {
        return CommonMethods.error(res, 'Email already exists');
      }
    }
  }

  // Delete a User
  async deleteUser(res: Response, userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndDelete(userID);
    if (deletedUser) {
      return CommonMethods.success(res, 'User Deleted successfully', []);
    } else {
      return CommonMethods.error(res, 'No User present');
    }
  }

  async uploadFile(res, body) {
    if (body.file) {
      const base64Str = body.file;
      const path = './uploads/user/';
      const optionalObj = {
        fileName: '',
        type: base64Str.split(';')[0].split('/')[1],
      };
      const imageInfo = base64ToImage(base64Str, path, optionalObj);

      const filePath = `http://${process.env.HOST}:${process.env.PORT}/userManagement/uploads/user/${imageInfo.fileName}`;
      return CommonMethods.success(
        res,
        'Image uploaded successfully',
        filePath,
      );
    } else {
      return CommonMethods.error(res, 'Image not uploaded');
    }
  }

  async alUploadFile(res, body, _id) {
    if (body.file) {
      const base64Str = body.file;
      const path = './uploads/user/';
      const optionalObj = {
        fileName: '',
        type: base64Str.split(';')[0].split('/')[1],
      };
      const imageInfo = base64ToImage(base64Str, path, optionalObj);
      const filePath = `http://${process.env.HOST}:${process.env.PORT}/userManagement/uploads/user/${imageInfo.fileName}`;
      const newUser = await this.userModel.findByIdAndUpdate(
        _id,
        { al_file: filePath, al_status: 1 },
        {
          new: true,
        },
      );

      return CommonMethods.success(res, 'Image uploaded successfully', newUser);
    } else {
      return CommonMethods.error(res, 'Image not uploaded');
    }
  }

  async deleteMultipleUser(
    res: Response,
    deleteUserDto: DeleteUserDto,
  ): Promise<any> {
    const deletedUsers = await this.userModel.remove({
      _id: { $in: deleteUserDto.selected_row },
    });

    if (deletedUsers) {
      return CommonMethods.success(
        res,
        `${deleteUserDto.type} Deleted successfully`,
        deletedUsers,
      );
    } else {
      return CommonMethods.error(res, 'No User present');
    }
  }
}
