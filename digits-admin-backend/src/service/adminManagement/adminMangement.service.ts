import { Injectable, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/interfaces/user.interface';
import { AdminManagementDTO } from 'src/dto/adminManagement.dto';
import { adminEditDTO } from 'src/dto/adminEdit.dto';
// import { stateDto } from 'src/dto/state.dto';
// import { state } from 'src/interfaces/state.interface';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const base64ToImage = require('base64-to-image');
import { CommonMethods } from 'src/utilities/common-methods';
import { QueryOptions } from '../plateManagement/paginationDto';
import { ObjectId } from 'mongodb';

@Injectable()
export class AdminManagementService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>, // @InjectModel('state') private readonly stateModel: Model<state>,
  ) {}
  // fetch all users
  // async getAllAdminUser(res: Response, options: QueryOptions): Promise<User[]> {
  //   let filterStatus: any;
  //   const page = options.page || 1;
  //   const limit = options.limit || 20;
  //   switch (options.filterBy) {
  //     case 'All':
  //       filterStatus = '';
  //       break;
  //     case 'Super Admin':
  //       filterStatus = 1;
  //       break;
  //     case 'Admin':
  //       filterStatus = 2;
  //       break;
  //     default:
  //       filterStatus = '';
  //       break;
  //   }
  //   const usersData = this.userModel
  //     .aggregate([
  //       {
  //         $match: {
  //           $or: [{ user_type: 1 }, { user_type: 2 }],
  //         },
  //       },
  //       {
  //         $addFields: {
  //           convertedState: { $toObjectId: '$state' },
  //         },
  //       },
  //       {
  //         $lookup: {
  //           from: 'states',
  //           localField: 'convertedState',
  //           foreignField: '_id',
  //           as: 'state_name',
  //         },
  //       },
  //       {
  //         $set: {
  //           state_name: { $arrayElemAt: ['$state_name.state', 0] },
  //         },
  //       },
  //       {
  //         $match: {
  //           $and: [
  //             {
  //               $or: [
  //                 {
  //                   email: { $regex: options.search, $options: 'i' },
  //                 },
  //                 { name: { $regex: options.search, $options: 'i' } },
  //                 { phone: { $regex: options.search, $options: 'i' } },
  //               ],
  //             },
  //             filterStatus === ''
  //               ? {}
  //               : {
  //                   user_type: filterStatus,
  //                 },
  //           ],
  //         },
  //       },
  //       {
  //         $unset: ['convertedState'],
  //       },
  //       // { $unwind: '$order_data' },
  //     ])
  //     .sort({ created_at: -1 });
  //   // .skip((Number(page) - 1) * Number(limit))
  //   // .limit(Number(limit))
  //   // .exec();
  //   const users = await usersData
  //     .skip((Number(page) - 1) * Number(limit))
  //     .limit(Number(limit))
  //     .exec();
  //   const runnerCount = await usersData.count('runnerCount');
  //   const totalRecord = runnerCount[0]['runnerCount'];
  //   const totalRunner = await this.userModel
  //     .find({
  //       user_type: 3,
  //     })
  //     .count();

  //   if (usersData) {
  //     return CommonMethods.success(res, 'Admins List fetched successfully', {
  //       users,
  //       totalRecord,
  //       // totalRunner: totalRunner,
  //     });
  //   } else {
  //     return CommonMethods.error(res, 'No users exists');
  //   }
  // }
  async getAllAdminUser(res: Response, options: QueryOptions): Promise<User[]> {
    let filterStatus: any;
    const page = options.page || 1;
    const limit = options.limit || 20;
    switch (options.filterBy) {
      case 'All':
        filterStatus = '';
        break;
      case 'Super Admin':
        filterStatus = 1;
        break;
      case 'Admin':
        filterStatus = 2;
        break;
      default:
        filterStatus = '';
        break;
    }
    const users = await this.userModel
      .aggregate([
        {
          $match: {
            $or: [{ user_type: 1 }, { user_type: 2 }],
          },
        },
        // {
        //   $addFields: {
        //     convertedState: { $toObjectId: '$state' },
        //   },
        // },
        {
          $lookup: {
            from: 'states',
            localField: 'state',
            foreignField: '_id',
            as: 'state_name',
          },
        },
        {
          $set: {
            state_name: { $arrayElemAt: ['$state_name.state', 0] },
          },
        },
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    email: { $regex: options.search ?? '', $options: 'i' },
                  },
                  { name: { $regex: options.search, $options: 'i' } },
                  { phone: { $regex: options.search, $options: 'i' } },
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    user_type: filterStatus,
                  },
            ],
          },
        },
        {
          $unset: ['convertedState'],
        },
        // { $unwind: '$order_data' },
      ])
      .sort({ created_at: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .exec();

    const totalAdmin = await this.userModel
      .find({
        $or: [{ user_type: 1 }, { user_type: 2 }],
      })
      .count();
    const totalRunner = await this.userModel
      .find({
        user_type: '3',
      })
      .count();
    if (options.filterBy === 'all' || options.filterBy === '') {
      if (users) {
        return CommonMethods.success(res, 'Admins List fetched successfully', {
          users,
          filterCount: users.length,
          totalRecord: totalAdmin,
          totalRunner: totalRunner,
        });
      } else {
        return CommonMethods.error(res, 'No users exists');
      }
    } else {
      if (users) {
        return CommonMethods.success(res, 'Admins List fetched successfully', {
          users,
          filterCount: users.length,
          totalRecord: users.length,
          totalRunner: users.length,
        });
      } else {
        return CommonMethods.error(res, 'No users exists');
      }
    }
  }

  // async getAllRunnerUser(
  //   res: Response,
  //   options: QueryOptions,
  // ): Promise<User[]> {
  //   let filterStatus: any;
  //   const page = options.page || 1;
  //   const limit = options.limit || 20;
  //   switch (options.filterBy) {
  //     case 'All':
  //       filterStatus = '';
  //       break;
  //     case '6346b840e84490ffc30235bd':
  //       filterStatus = '6346b840e84490ffc30235bd';
  //       break;
  //     case '6346b864e84490ffc30235bf':
  //       filterStatus = '6346b864e84490ffc30235bf';
  //       break;
  //     case '6346b86de84490ffc30235c1':
  //       filterStatus = '6346b86de84490ffc30235c1';
  //       break;
  //     case '6346b88be84490ffc30235c7':
  //       filterStatus = '6346b88be84490ffc30235c7';
  //       break;
  //     case '6346b8a0e84490ffc30235cb':
  //       filterStatus = '6346b8a0e84490ffc30235cb';
  //       break;
  //     case '6346b8a7e84490ffc30235cd':
  //       filterStatus = '6346b8a7e84490ffc30235cd';
  //       break;
  //     case '6346b8b9e84490ffc30235d1':
  //       filterStatus = '6346b8b9e84490ffc30235d1';
  //       break;
  //     case '6346b8d1e84490ffc30235d3':
  //       filterStatus = '6346b8d1e84490ffc30235d3';
  //       break;
  //     case '6346b8efe84490ffc30235d7':
  //       filterStatus = '6346b8efe84490ffc30235d7';
  //       break;
  //     case '6348eb4c64bcb81527cb3596':
  //       filterStatus = '6348eb4c64bcb81527cb3596';
  //       break;
  //     case '6346b878e84490ffc30235c3':
  //       filterStatus = '6346b878e84490ffc30235c3';
  //       break;
  //     case '6346b883e84490ffc30235c5':
  //       filterStatus = '6346b883e84490ffc30235c5';
  //       break;
  //     case '6346b895e84490ffc30235c9':
  //       filterStatus = '6346b895e84490ffc30235c9';
  //       break;
  //     case '6346b8b0e84490ffc30235cf':
  //       filterStatus = '6346b8b0e84490ffc30235cf';
  //       break;
  //     case '6346b8d8e84490ffc30235d5':
  //       filterStatus = '6346b8d8e84490ffc30235d5';
  //       break;
  //     case '6396ab885e43b466617700fa':
  //       filterStatus = '6396ab885e43b466617700fa';
  //       break;
  //     default:
  //       filterStatus = '';
  //       break;
  //   }
  //   const runners = this.userModel
  //     .aggregate([
  //       {
  //         $match: {
  //           user_type: 3,
  //         },
  //       },
  //       {
  //         $addFields: {
  //           convertedState: { $toObjectId: '$state' },
  //         },
  //       },
  //       {
  //         $lookup: {
  //           from: 'states',
  //           localField: 'convertedState',
  //           foreignField: '_id',
  //           as: 'state_name',
  //         },
  //       },
  //       {
  //         $set: {
  //           state_name: { $arrayElemAt: ['$state_name.state', 0] },
  //         },
  //       },
  //       {
  //         $match: {
  //           $and: [
  //             {
  //               $or: [
  //                 {
  //                   email: { $regex: options.search, $options: 'i' },
  //                 },
  //                 { name: { $regex: options.search, $options: 'i' } },
  //                 { phone: { $regex: options.search, $options: 'i' } },
  //               ],
  //             },
  //             filterStatus === ''
  //               ? {}
  //               : {
  //                   state: filterStatus,
  //                 },
  //           ],
  //         },
  //       },
  //       {
  //         $unset: ['convertedState'],
  //       },
  //       // { $unwind: '$order_data' },
  //     ])
  //     .sort({ created_at: -1 });
  //   // .skip((Number(page) - 1) * Number(limit))
  //   // .limit(Number(limit))
  //   // .exec();

  //   const runnerData = await runners
  //     .skip((Number(page) - 1) * Number(limit))
  //     .limit(Number(limit))
  //     .exec();
  //   const runnerCount = await runners.count('runnerCount');
  //   const totalRunner = runnerCount[0]['runnerCount'];
  //   if (runners) {
  //     return CommonMethods.success(res, 'Admins List fetched successfully', {
  //       runnerData,
  //       totalRunner,
  //     });
  //   } else {
  //     return CommonMethods.error(res, 'No users exists');
  //   }
  // }

  async getAllRunnerUser(
    res: Response,
    options: QueryOptions,
  ): Promise<User[]> {
    const query =
      options.filterBy === '' || options.filterBy === 'All'
        ? ''
        : { _id: new ObjectId(options.filterBy) };
    let filterStatus: any;
    const page = options.page || 1;
    const limit = options.limit || 20;
    switch (options.filterBy) {
      case 'All':
        filterStatus = '';
        break;
      case options.filterBy:
        filterStatus = options.filterBy;
        break;
      default:
        filterStatus = '';
        break;
    }
    const runnerData = await this.userModel
      .aggregate([
        {
          $match: {
            user_type: 3,
          },
        },
        {
          $addFields: {
            convertedState: { $toObjectId: '$state' },
          },
        },
        {
          $lookup: {
            from: 'states',
            localField: 'state',
            foreignField: '_id',
            as: 'state_name',
          },
        },
        {
          $set: {
            state_name: { $arrayElemAt: ['$state_name.state', 0] },
          },
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
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    state: query != '' ? query._id : '',
                  },
            ],
          },
        },
        {
          $unset: ['convertedState'],
        },
        // { $unwind: '$order_data' },
      ])
      .sort({ created_at: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .exec();
    // console.log(runnerData);

    // const totalAdmin = await this.userModel
    //   .find({
    //     user_type: '3',
    //   })
    //   .count();
    const totalRunner = await this.userModel
      .find({
        user_type: 3,
      })
      .count();

    if (runnerData) {
      return CommonMethods.success(res, 'Admins List fetched successfully', {
        runnerData,
        filterCount: runnerData.length,
        totalRunner: totalRunner,
      });
    } else {
      return CommonMethods.error(res, 'No users exists');
    }
  }

  // Get a single user
  async getUser(res: Response, userID): Promise<User> {
    const user = await this.userModel
      .findById(userID, { PIC_phone: 0, PIC_fullname: 0 })
      .exec();
    if (user) {
      return CommonMethods.success(res, 'Success', user);
    } else {
      return CommonMethods.error(res, 'User does not exists');
    }
  }

  // post a single User
  async addUser(res: Response, adminManagementDTO: AdminManagementDTO) {
    const { email } = adminManagementDTO;
    const user = await this.userModel.findOne({ email });
    const newUser = await new this.userModel(adminManagementDTO);
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
    adminEditDTO: adminEditDTO,
  ): Promise<User> {
    const { email } = adminEditDTO;

    const checkUser = await this.userModel.findById(userID);
    const checkEmail = await this.userModel.findOne({ email });
    const data = checkEmail ? checkEmail.email : null;
    const data1 = checkUser ? checkUser.email : null;
    if (data1 === data) {
      const updatedUser = await this.userModel.findByIdAndUpdate(
        userID,
        adminEditDTO,
        {
          new: true,
        },
      );
      await (await updatedUser.save()).$set({ updated_at: Date.now() });
      return CommonMethods.success(
        res,
        'Admin edited successfully',
        updatedUser,
      );
    } else if (!checkUser) {
      return CommonMethods.error(res, 'Admin does not exists');
    } else {
      if (!checkEmail) {
        const updatedUser = await this.userModel.findByIdAndUpdate(
          userID,
          adminEditDTO,
          {
            new: true,
          },
        );
        await (await updatedUser.save()).$set({ updated_at: Date.now() });
        return CommonMethods.success(
          res,
          'Admin edited successfully',
          updatedUser,
        );
      } else {
        return CommonMethods.error(res, 'Email already exists');
      }
    }
  }
  async editUser(
    res: Response,
    userID,
    adminEditDTO: adminEditDTO,
  ): Promise<User> {
    const { email } = adminEditDTO;

    const checkUser = await this.userModel.findById(userID);
    const checkEmail = await this.userModel.findOne({ email });
    const data = checkEmail ? checkEmail.email : null;
    const data1 = checkUser ? checkUser.email : null;
    if (data1 === data) {
      const updatedUser = await this.userModel.findByIdAndUpdate(
        userID,
        adminEditDTO,
        {
          new: true,
        },
      );
      await (await updatedUser.save()).$set({ updated_at: Date.now() });
      return CommonMethods.success(
        res,
        'Admin edited successfully',
        updatedUser,
      );
    } else if (!checkUser) {
      return CommonMethods.error(res, 'Admin does not exists');
    } else {
      if (!checkEmail) {
        const updatedUser = await this.userModel.findByIdAndUpdate(
          userID,
          adminEditDTO,
          {
            new: true,
          },
        );
        await (await updatedUser.save()).$set({ updated_at: Date.now() });
        return CommonMethods.success(
          res,
          'Admin edited successfully',
          updatedUser,
        );
      } else {
        return CommonMethods.error(res, 'Email already exists');
      }
    }
  }
  // Delete a User
  async deleteUser(res: Response, userID): Promise<any> {
    const deletedUser = await this.userModel.findOneAndDelete(userID);
    if (deletedUser) {
      return CommonMethods.success(res, 'User Deleted successfully', []);
    } else {
      return CommonMethods.error(res, 'No User present');
    }
  }
  async uploadFile(res, body) {
    if (body.file) {
      const base64Str = body.file;
      const path = './uploads/admin/';
      const optionalObj = {
        fileName: '',
        type: base64Str.split(';')[0].split('/')[1],
      };
      const imageInfo = base64ToImage(base64Str, path, optionalObj);

      const filePath = `http://${process.env.HOST}:${process.env.PORT}/adminManagement/uploads/admin/${imageInfo.fileName}`;
      return CommonMethods.success(
        res,
        'Image uploaded successfully',
        filePath,
      );
    } else {
      return CommonMethods.error(res, 'Image not uploaded');
    }
  }
}
