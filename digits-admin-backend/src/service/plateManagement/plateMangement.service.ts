import { Injectable, Res } from '@nestjs/common';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Plate } from 'src/interfaces/plate.interface';
import { PlateManagementDTO } from 'src/dto/plateManagement.dto';
import { CommonMethods } from 'src/utilities/common-methods';
import { state } from 'src/interfaces/state.interface';
import { MailDTO } from 'src/mail/mail.dto';
import { SendGridService } from 'src/sendgrid/sendgrid.service';
import { User } from 'src/interfaces/user.interface';
const base64ToImage = require('base64-to-image');
const csvtojson = require('csvtojson');
import { QueryOptions } from './paginationDto';
import { Purchase } from 'src/interfaces/purchase.interface';
import { Order } from 'src/interfaces/orderDetails.interface';
@Injectable()
export class PlateManagementService {
  constructor(
    @InjectModel('Plate') private readonly plateModel: Model<Plate>,
    @InjectModel('state') private readonly stateModel: Model<state>,
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Purchase') private readonly purchaseModel: Model<Purchase>,
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    private sendGridService: SendGridService, // private readonly sendGridService: SendGridService,
  ) {}
  // fetch all users
  async getAllPlates(res: Response, options: QueryOptions): Promise<Plate[]> {
    let filterStatus: any;
    const page = options.page || 1;
    const limit = options.limit || 20;
    switch (options.filterBy) {
      case 'All':
        filterStatus = '';
        break;
      case 'Sold':
        filterStatus = 0;
        break;
      case 'On Bid':
        filterStatus = 1;
        break;
      case 'On Sale':
        filterStatus = 2;
        break;
      default:
        filterStatus = '';
        break;
    }
    const plateRegex = new RegExp('^' + options.search);
    const plates = await this.plateModel
      .aggregate([
        { $match: { add_by: 0 } },
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    email: { $regex: options.search, $options: 'i' },
                  },
                  {
                    phone: { $regex: options.search, $options: 'i' },
                  },
                  { name: { $regex: options.search, $options: 'i' } },
                  { plate_number: { $regex: options.search, $options: 'i' } },
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    sell_status: filterStatus,
                  },
            ],
          },
        },
      ])

      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .exec();

    // const plates = await this.plateModel
    //   .find({
    //     // add_by: 0,
    //     $and: [
    //       {
    //         $or: [
    //           {
    //             plate_number: { $regex: options.search, $options: 'i' },
    //           },
    //           { name: { $regex: options.search, $options: 'i' } },
    //         ],
    //       },
    //       filterStatus === '' ? {} : { sell_status: filterStatus },
    //     ],
    //   })
    //   .skip((Number(page) - 1) * Number(limit))
    //   .limit(Number(limit))
    //   .exec();

    const adminPlateIds = plates.map((i) => i._id);

    const matchForPrice = await this.plateModel.find({
      adminPlate_id: {
        $in: adminPlateIds,
      },
    });
    const states = await this.stateModel.find();

    // console.log(stateName, 'stateName');
    // plates.map((plate) => {
    //   matchForPrice.map((data) => {
    //     if (plate._id.toString() === data.adminPlate_id) {
    //       console.log('1');

    //       plate['highest_bid'] = data.highest_bid;
    //     }
    //   });
    // });
    plates.map((plate) => {
      states.map((data) => {
        if (plate.state.toString() === data._id.toString()) {
          plate['state_name'] = data.state;
        }
      });
    });
    // plates.map((plate) => {
    //   stateName.map((data) => {
    //     if (String(plate['state']) === String(data._id)) {
    //       plate['state'] = data.state;
    //       console.log(data.state, ']');
    //     }
    //   });
    // });

    // const dta = await this.plateModel.find().count();
    // console.log(dta, '0000');

    // const total = data / 20;

    if (
      options.filterBy === 'all' ||
      options.filterBy === '' ||
      options.filterBy === 'On Sale'
    ) {
      if (plates) {
        return CommonMethods.success(res, 'Plates List fetched successfully', {
          plates,
          page,
          filterCount: plates.length,
          // totalCount: dta - 1,
          totalCount: 4400000,
        });
      } else {
        return CommonMethods.error(res, 'No plates exists');
      }
    } else {
      if (options.filterBy === 'Sold') {
        const plates = await this.plateModel.aggregate([
          { $match: { add_by: 1 } },

          {
            $lookup: {
              from: 'users',
              localField: 'user_id',
              foreignField: '_id',
              as: 'name',
            },
          },
          {
            $set: {
              name: { $arrayElemAt: ['$name.name', 0] },

              company_name: { $arrayElemAt: ['$name.company_name', 0] },
              first_name: { $arrayElemAt: ['$name.first_name', 0] },
              email: { $arrayElemAt: ['$name.email', 0] },
              phone: { $arrayElemAt: ['$name.phone', 0] },
              state_name: 'Perak',
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
                    {
                      phone: { $regex: options.search, $options: 'i' },
                    },
                    { name: { $regex: options.search, $options: 'i' } },
                    { plate_number: { $regex: options.search, $options: 'i' } },
                  ],
                },
                filterStatus === ''
                  ? {}
                  : {
                      sell_status: filterStatus,
                    },
              ],
            },
          },
        ]);

        if (plates) {
          return CommonMethods.success(
            res,
            'Plates List fetched successfully',
            {
              plates,
              page,
              filterCount: plates.length,
              // totalCount: dta - 1,
              totalCount: plates.length,
            },
          );
        } else {
          return CommonMethods.error(res, 'No plates exists');
        }
      } else {
        const plates = await this.plateModel.aggregate([
          { $match: { add_by: 1 } },
          {
            $match: {
              $and: [
                {
                  $or: [
                    {
                      email: { $regex: options.search, $options: 'i' },
                    },
                    {
                      phone: { $regex: options.search, $options: 'i' },
                    },
                    { name: { $regex: options.search, $options: 'i' } },
                    { plate_number: { $regex: options.search, $options: 'i' } },
                  ],
                },
                filterStatus === ''
                  ? {}
                  : {
                      sell_status: filterStatus,
                    },
              ],
            },
          },
        ]);
        if (plates) {
          return CommonMethods.success(
            res,
            'Plates List fetched successfully',
            {
              plates,
              page,
              filterCount: plates.length,
              // totalCount: dta - 1,
              totalCount: plates.length,
            },
          );
        } else {
          return CommonMethods.error(res, 'No plates exists');
        }
      }
    }
  }

  async getRunnerName(res: Response, plateID): Promise<Plate> {
    const plates = await this.plateModel.findById(plateID);
    const data = plates.plate_number;
    const plate = await this.plateModel
      .find({ plate_number: data })
      .sort({ created_at: 1 })
      .limit(1);

    if (plates) {
      return CommonMethods.success(
        res,
        'Plates List fetched successfully',
        plate[0],
      );
    } else {
      return CommonMethods.error(res, 'No plates exists');
    }
  }

  // async getAllVarificationPlates(
  //   res: Response,
  //   options: QueryOptions,
  // ): Promise<Plate[]> {
  //   let filterStatus: any;
  //   const page = options.page || 1;
  //   const limit = options.limit || 20;
  //   switch (options.filterBy) {
  //     case 'All':
  //       filterStatus = '';
  //       break;
  //     case 'Pending':
  //       filterStatus = 0;
  //       break;
  //     case 'Verify Now':
  //       filterStatus = 1;
  //       break;
  //     case 'Verified':
  //       filterStatus = 2;
  //       break;
  //     case 'Rejected':
  //       filterStatus = 3;
  //       break;
  //     default:
  //       filterStatus = '';
  //       break;
  //   }

  //   const platesData = this.plateModel
  //     .aggregate([
  //       { $match: { add_by: 1 } },
  //       {
  //         $match: {
  //           $and: [
  //             {
  //               $or: [
  //                 {
  //                   email: { $regex: options.search, $options: 'i' },
  //                 },
  //                 { name: { $regex: options.search, $options: 'i' } },
  //                 { plate_number: { $regex: options.search, $options: 'i' } },
  //               ],
  //             },
  //             filterStatus === ''
  //               ? {}
  //               : {
  //                   status: filterStatus,
  //                 },
  //           ],
  //         },
  //       },
  //       {
  //         $lookup: {
  //           from: 'plates',
  //           localField: 'plate_number',
  //           foreignField: 'plate_number',
  //           as: 'name',
  //         },
  //       },
  //       {
  //         $set: {
  //           name: { $arrayElemAt: ['$name.name', 0] },
  //           email: { $arrayElemAt: ['$name.email', 0] },
  //         },
  //       },
  //     ])
  //     .sort({ created_at: -1 });
  //   // .skip((Number(page) - 1) * Number(limit))
  //   // .limit(Number(limit))
  //   // .exec();
  //   const plates = await platesData
  //     .skip((Number(page) - 1) * Number(limit))
  //     .limit(Number(limit))
  //     .exec();
  //   const runnerCount = await platesData.count('runnerCount');
  //   const totalRecord = runnerCount[0]['runnerCount'];
  //   const totalVRC = await this.plateModel.find({ add_by: 1 }).count();
  //   if (plates) {
  //     return CommonMethods.success(res, 'Plates List fetched successfully', {
  //       plates,
  //       totalRecord,
  //     });
  //   } else {
  //     return CommonMethods.error(res, 'No plates exists');
  //   }
  // }
  async getAllVarificationPlates(
    res: Response,
    options: QueryOptions,
  ): Promise<Plate[]> {
    let filterStatus: any;
    const page = options.page || 1;
    const limit = options.limit || 20;
    switch (options.filterBy) {
      case 'All':
        filterStatus = '';
        break;
      case 'Pending':
        filterStatus = 0;
        break;
      case 'Verify Now':
        filterStatus = 1;
        break;
      case 'Verified':
        filterStatus = 2;
        break;
      case 'Rejected':
        filterStatus = 3;
        break;
      default:
        filterStatus = '';
        break;
    }

    const plates = await this.plateModel
      .aggregate([
        { $match: { add_by: 1 } },
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    email: { $regex: options.search, $options: 'i' },
                  },
                  { name: { $regex: options.search, $options: 'i' } },
                  { plate_number: { $regex: options.search, $options: 'i' } },
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    status: filterStatus,
                  },
            ],
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'name',
          },
        },
        {
          $set: {
            name: { $arrayElemAt: ['$name.name', 0] },
            company_name: { $arrayElemAt: ['$name.company_name', 0] },
            first_name: { $arrayElemAt: ['$name.first_name', 0] },
            email: { $arrayElemAt: ['$name.email', 0] },
          },
        },
      ])
      .sort({ created_at: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .exec();
    const totalVRC = await this.plateModel.find({ add_by: 1 }).count();
    if (plates) {
      if (options.filterBy === 'all' || options.filterBy === '') {
        return CommonMethods.success(res, 'Plates List fetched successfully', {
          plates,
          filterCount: plates.length,
          totalRecord: totalVRC,
        });
      } else {
        return CommonMethods.success(res, 'Plates List fetched successfully', {
          plates,
          filterCount: plates.length,
          totalRecord: plates.length,
        });
      }
    } else {
      return CommonMethods.error(res, 'No plates exists');
    }
  }
  async GetAllPlates(): Promise<Plate[]> {
    const plates = await this.plateModel.find().exec();
    return plates;
  }

  countallplates(options) {
    return this.plateModel.find({ add_by: 0 }).count(options).exec();
  }

  getallbidcount(options) {
    return this.plateModel
      .find({
        $or: [{ sell_status: 1 }],
      })
      .count(options)
      .exec();
  }

  getallSoldcount(options) {
    return this.plateModel
      .find({
        $or: [{ sell_status: 0 }],
      })
      .count(options)
      .exec();
  }
  // Get a single user
  async getPlate(res: Response, plateID): Promise<Plate> {
    const plate = await this.plateModel.findById(plateID);

    if (plate.sell_status === 2) {
      const aaa = await this.plateModel.find({
        plate_number: plate.plate_number,
        add_by: 0,
      });

      const id = plate.user_id;
      const user = await this.userModel.findById(id);

      const vrcDoc = await this.plateModel.find({
        add_b: 1,
        plate_number: plate.plate_number,
      });

      const plateNumber = plate.plate_number;
      const Bid = await this.purchaseModel
        .find({ plate_number: plateNumber, payment_status: 'true' })
        .sort({ bid_price: -1 })
        .limit(1);

      const data = aaa[0].state;
      const stateName = await this.stateModel.findById(data).exec();
      const bidPrice = Bid.map((i) => i.bid_price).toString();
      const name = stateName.state;
      const filepath = vrcDoc.map((i) => i.file).toString();

      const filenames = filepath.slice(54);
      plate.filename = filenames;
      plate.state_name = name;
      plate.highest_bid = bidPrice;
      // plate.email = user.email;
      // plate.name = user.name || user.first_name || user.company_name;
      // plate.phone = user.phone;
      plate.file = vrcDoc
        .map((i) => i.file)
        .toString()
        .slice(1);

      if (plate) {
        return CommonMethods.success(res, 'Success', plate);
      } else {
        return CommonMethods.error(res, 'Plate does not exists');
      }
    } else {
      if (plate.add_by === 1) {
        const aaa = await this.plateModel.find({
          plate_number: plate.plate_number,
          add_by: 0,
        });
        const id = plate.user_id;
        const user = await this.userModel.findById(id);

        const vrcDoc = await this.plateModel.find({
          add_b: 1,
          plate_number: plate.plate_number,
        });

        const plateNumber = plate.plate_number;
        const Bid = await this.purchaseModel
          .find({ plate_number: plateNumber, payment_status: 'true' })
          .sort({ bid_price: -1 })
          .limit(1);

        const data = aaa[0].state;
        const stateName = await this.stateModel.findById(data).exec();
        const bidPrice = Bid.map((i) => i.bid_price).toString();
        const name = stateName.state;
        const filepath = vrcDoc.map((i) => i.file).toString();

        const filenames = filepath.slice(54);
        plate.filename = filenames;
        plate.state_name = name;
        plate.highest_bid = bidPrice;
        plate.email = user.email;
        plate.name = user.name || user.first_name || user.company_name;
        plate.phone = user.phone;
        plate.file = vrcDoc
          .map((i) => i.file)
          .toString()
          .slice(1);

        if (plate) {
          return CommonMethods.success(res, 'Success', plate);
        } else {
          return CommonMethods.error(res, 'Plate does not exists');
        }
      } else {
        const aaa = await this.plateModel.find({
          plate_number: plate.plate_number,
          add_by: 0,
        });
        const id = plate.user_id;
        const user = await this.userModel.findById(id);

        const vrcDoc = await this.plateModel.find({
          add_b: 1,
          plate_number: plate.plate_number,
        });

        const plateNumber = plate.plate_number;
        const Bid = await this.purchaseModel
          .find({ plate_number: plateNumber, payment_status: 'true' })
          .sort({ bid_price: -1 })
          .limit(1);

        const data = aaa[0].state;
        const stateName = await this.stateModel.findById(data).exec();
        const bidPrice = Bid.map((i) => i.bid_price).toString();
        const name = stateName.state;
        const filepath = vrcDoc.map((i) => i.file).toString();

        const filenames = filepath.slice(54);
        plate.filename = filenames;
        plate.state_name = name;
        plate.highest_bid = bidPrice;
        // plate.email = user.email;
        // plate.name = user.name || user.first_name || user.company_name;
        // plate.phone = user.phone;
        plate.file = vrcDoc
          .map((i) => i.file)
          .toString()
          .slice(1);

        if (plate) {
          return CommonMethods.success(res, 'Success', plate);
        } else {
          return CommonMethods.error(res, 'Plate does not exists');
        }
      }
    }
  }
  // // post a single User
  // async addPlate(
  //   res: Response,
  //   plateManagementDTO: PlateManagementDTO,
  // ): Promise<Plate> {
  //   const { plate_number } = plateManagementDTO;
  //   const plate = await this.plateModel.findOne({ plate_number });
  //   if (!plate) {
  //     const newPlate = await new this.plateModel(plateManagementDTO);
  //     newPlate.$set({ add_by: 'Admin' });
  //     await newPlate.save();

  //     if (newPlate) {
  //       return CommonMethods.success(res, 'Plate added successfully', newPlate);
  //     } else {
  //       return CommonMethods.error(res, 'Plate not added');
  //     }
  //   } else {
  //     return CommonMethods.error(res, 'Plate Already Exist');
  //   }
  // }

  // post a single User
  async addPlate(
    res: Response,
    plateManagementDTO: PlateManagementDTO,
  ): Promise<Plate> {
    const { plate_number } = plateManagementDTO;
    const plate = await this.plateModel.findOne({ plate_number });
    if (!plate) {
      const newPlate = await new this.plateModel(plateManagementDTO);
      newPlate.$set({ add_by: 0 });
      await newPlate.save();

      if (newPlate) {
        return CommonMethods.success(res, 'Plate added successfully', newPlate);
      } else {
        return CommonMethods.error(res, 'Plate not added');
      }
    } else {
      return CommonMethods.error(res, 'Plate Already Exist');
    }
  }

  async editPlate(
    @Res() res,
    plateID,
    plateManagementDTO: PlateManagementDTO,
  ): Promise<Plate> {
    const editPlate = await this.plateModel.findByIdAndUpdate(
      plateID,
      plateManagementDTO,
      { new: true },
    );
    if (editPlate) {
      return CommonMethods.success(res, 'Plate edited successfully', editPlate);
    } else {
      return CommonMethods.error(res, 'No Plate present');
    }
  }

  async editPlateStatus(
    @Res() res,
    plateID,
    plateManagementDTO: PlateManagementDTO,
  ): Promise<Plate> {
    if (plateManagementDTO.status === 3) {
      const editPlate = await this.plateModel.findByIdAndUpdate(
        plateID,
        plateManagementDTO,
        { new: true },
      );
      if (editPlate) {
        // return CommonMethods.error(res, 'Plate Rejected Successfull');
        return CommonMethods.success(
          res,
          'Plate Rejected Successfull',
          editPlate,
        );
      } else {
        return CommonMethods.error(res, 'No Plate present');
      }
    } else if (plateManagementDTO.status === 2) {
      const editPlate = await this.plateModel.findByIdAndUpdate(
        plateID,
        plateManagementDTO,
        { new: true },
      );
      if (editPlate) {
        return CommonMethods.success(
          res,
          'Plate verified Successfull',
          editPlate,
        );
      } else {
        return CommonMethods.error(res, 'No Plate present');
      }
    } else {
      return CommonMethods.error(res, 'No Plate present');
    }
  }
  // Delete a User
  async deletePlate(res: Response, plateID): Promise<any> {
    const deletedPlate = await this.plateModel.findByIdAndDelete(plateID);
    if (deletedPlate) {
      return CommonMethods.success(res, 'Plate Deleted successfully', []);
    } else {
      return CommonMethods.error(res, 'No Plate present');
    }
  }

  async uploadFile(res, body) {
    if (body.file) {
      const base64Str = body.file;
      const path = './uploads/plate/';
      const optionalObj = {
        fileName: '',
        type: base64Str.split(';')[0].split('/')[1],
      };
      const imageInfo = base64ToImage(base64Str, path, optionalObj);
      const filePath = `http://${process.env.HOST}:${process.env.PORT}/plateManagement/uploads/plate/${imageInfo.fileName}`;
      return CommonMethods.success(
        res,
        'Image uploaded successfully',
        filePath,
      );
    } else {
      return CommonMethods.error(res, 'Image not uploaded');
    }
  }

  async deleteMultiplePlates(
    res: Response,
    selected_row: string[],
  ): Promise<any> {
    const dataString = selected_row.toString();
    const deletedPlate = await this.plateModel.deleteMany({
      _id: { $in: selected_row },
    });

    const deletedOrder = await this.purchaseModel.deleteMany({
      _id: { $in: selected_row },
    });

    const deletedPurchases = await this.orderModel.deleteMany({
      _id: { $in: selected_row },
    });

    if (deletedPlate) {
      return CommonMethods.success(res, 'Plates Deleted successfully', []);
    } else {
      return CommonMethods.error(res, 'No Plate present');
    }
  }

  async deleteMultipleOrders(
    res: Response,
    selected_row: string[],
  ): Promise<any> {
    const dataString = selected_row.toString();
    const deletedPlate = await this.plateModel.deleteMany({
      _id: { $in: selected_row },
    });

    const deletedOrder = await this.purchaseModel.deleteMany({
      _id: { $in: selected_row },
    });

    const deletedPurchases = await this.orderModel.deleteMany({
      _id: { $in: selected_row },
    });

    if (deletedPlate) {
      return CommonMethods.success(res, 'Orders Deleted successfully', []);
    } else {
      return CommonMethods.error(res, 'No Orders present');
    }
  }

  async runnerAssignmentPlate(res: Response): Promise<Plate[]> {
    const plates = await this.plateModel
      .aggregate([
        { $match: { runner_id: { $exists: true }, status: 2 } },
        {
          $addFields: {
            runnerID: { $toObjectId: '$runner_id' },
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'runnerID',
            foreignField: '_id',
            as: 'runner_name',
          },
        },
        {
          $set: {
            runner_name: { $arrayElemAt: ['$runner_name.name', 0] },
          },
        },
        {
          $unset: [
            'runnerID',
            'name',
            'price',
            'email',
            'phone',
            'seller_level',
            'file',
            'Total',
            'expires',
            'sell_type',
            'transaction_fee',
            'user_id',
            'state',
            'highest_bid',
            'lowest_bid',
          ],
        },
      ])
      .sort({ created_at: -1 });
    if (plates) {
      return CommonMethods.success(
        res,
        'Plates List fetched successfully',
        plates,
      );
    } else {
      return CommonMethods.error(res, 'No plates exists');
    }
  }

  async assignmentPlatesList(res: Response, runner_id): Promise<Plate> {
    const plate = await this.plateModel
      .find({ runner_id })
      .select(['plate_number', 'name', 'runner_status']);

    if (plate) {
      return CommonMethods.success(res, 'Success', plate);
    } else {
      return CommonMethods.error(res, 'Plate does not exists');
    }
  }

  // async uploadCSV(res, body) {
  //   if (body.file) {
  //     const base64Str = body.file;
  //     const path = './uploads/plate/';
  //     const optionalObj = {
  //       fileName: '',
  //       type: base64Str.split(';')[0].split('/')[1],
  //     };
  //     const imageInfo = base64ToImage(base64Str, path, optionalObj);
  //     const parsedData = [];
  //     const errorArry = [];

  //     await csvtojson()
  //       .fromFile(`uploads/plate/${imageInfo.fileName}`)
  //       .then(async (data) => {
  //         const plates = await this.plateModel.find({ add_by: 0 });
  //         // console.log(plates, '----------');

  //         for (let i = 0; i < data.length; i++) {
  //           if (
  //             data[i]['Plate number'] == ''
  //             // data[i]['Plate number'] !== plates.map((i) => i.plate_number)
  //           ) {
  //             errorArry.push('Row: ' + (i + 2) + ' Plate Number Required');
  //           }
  //           // if (
  //           //   // data[i]['Plate number'] == '' &&
  //           //   (data[i]['Plate number'] = !plates.map((i) => i.plate_number))
  //           // )
  //           if (data[i]['Name'] == '') {
  //             // {
  //             //   errorArry.push('Row: ' + (i + 2) + ' Plate Number Already Exits');
  //             // }

  //             errorArry.push('Row: ' + (i + 2) + ' Name Required');
  //           }
  //           if (data[i]['Email'] == '') {
  //             errorArry.push('Row: ' + (i + 2) + ' Email Required');
  //           } else if (
  //             !data[i]['Email'].match(
  //               /^[0-9a-zA-Z]+(?:(\.|\_|\-)[0-9a-zA-Z]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,4}){1,2}$/,
  //             )
  //           ) {
  //             errorArry.push('Row: ' + (i + 2) + ' Invalid email');
  //           }

  //           if (data[i]['Phone'] == '') {
  //             errorArry.push('Row: ' + (i + 2) + ' Phone Required');
  //           }
  //         }
  //       });

  //     if (errorArry.length > 0) {
  //       return CommonMethods.error(res, `${errorArry}`);
  //     } else {
  //       await csvtojson()
  //         .fromFile(`uploads/plate/${imageInfo.fileName}`)
  //         .then((data) => {
  //           for (let i = 0; i < data.length; i++) {
  //             if (errorArry.length == 0) {
  //               const newPlate = new this.plateModel({
  //                 plate_number: data[i]['Plate number'],
  //                 name: data[i]['Name'],
  //                 email: data[i]['Email'],
  //                 phone: data[i]['Phone'],
  //                 status: 0,
  //                 sell_status: 2,
  //                 seller_level: 0,
  //                 add_by: 0,
  //                 state: body.state,
  //               });

  //               newPlate.save();
  //               parsedData.push(newPlate);
  //             }
  //           }
  //         });
  //       return CommonMethods.success(res, 'Data upload successfully', []);
  //     }
  //   } else {
  //     return CommonMethods.error(res, 'No data upload');
  //   }
  // }
  async uploadCSV(res, body) {
    if (body.file) {
      const base64Str = body.file;
      const path = './uploads/plate/';
      const optionalObj = {
        fileName: '',
        type: base64Str.split(';')[0].split('/')[1],
      };
      const imageInfo = base64ToImage(base64Str, path, optionalObj);
      const parsedData = [];
      const errorArry = [];

      await csvtojson()
        .fromFile(`uploads/plate/${imageInfo.fileName}`)
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i]['Plate number'] == '') {
              errorArry.push('Row: ' + (i + 2) + ' Plate Number Required');
            }

            if (data[i]['Name'] == '') {
              errorArry.push('Row: ' + (i + 2) + ' Name Required');
            }
            if (data[i]['Email'] == '') {
              errorArry.push('Row: ' + (i + 2) + ' Email Required');
            } else if (
              !data[i]['Email'].match(
                /^[0-9a-zA-Z]+(?:(\.|\_|\-)[0-9a-zA-Z]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,4}){1,2}$/,
              )
            ) {
              errorArry.push('Row: ' + (i + 2) + ' Invalid email');
            }

            if (data[i]['Phone'] == '') {
              errorArry.push('Row: ' + (i + 2) + ' Phone Required');
            }
          }
        });

      if (errorArry.length > 0) {
        return CommonMethods.error(res, `${errorArry}`);
      } else {
        await csvtojson()
          .fromFile(`uploads/plate/${imageInfo.fileName}`)
          .then((data) => {
            for (let i = 0; i < data.length; i++) {
              if (errorArry.length == 0) {
                const newPlate = new this.plateModel({
                  plate_number: data[i]['Plate number'],
                  name: data[i]['Name'],
                  email: data[i]['Email'],
                  phone: data[i]['Phone'],
                  // status: 0,
                  sell_status: 2,
                  seller_level: 0,
                  add_by: 0,
                  state: body.state,
                });

                newPlate.save();
                parsedData.push(newPlate);
              }
            }
          });
        return CommonMethods.success(res, 'Data upload successfully', []);
      }
    } else {
      return CommonMethods.error(res, 'No data upload');
    }
  }

  async getOwnerDetail(res: Response, userID): Promise<User> {
    const user = await this.userModel.findById(userID);
    if (user) {
      return CommonMethods.success(res, 'Success', user);
    } else {
      return CommonMethods.error(res, 'User does not exists');
    }
  }

  async searchPlate(@Res() res, options: QueryOptions) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const plateRegex = new RegExp('^' + options.search);
    if (options.search.length > 0) {
      const plate = await this.plateModel
        .find({ add_by: 0, plate_number: plateRegex })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));

      const data = await this.plateModel
        .find({ add_by: 0, plate_number: plateRegex })
        .count();

      const adminPlateIds = plate.map((i) => i._id);
      // console.log(adminPlateIds);

      const matchForPrice = await this.plateModel.find({
        status: 2,
        // expireStatus: { $ne: 1 },
        adminPlate_id: {
          $in: adminPlateIds,
        },
      });
      // console.log(matchForPrice);

      const stateName = await this.stateModel.find();
      plate.map((plate) => {
        matchForPrice.map((data) => {
          if (plate._id === data.adminPlate_id) {
            plate['price'] = data.price;
          }
        });
      });

      plate.map((plate) => {
        stateName.map((data) => {
          if (plate.state === data._id) {
            plate['state_name'] = data.state;
          }
        });
      });

      if (plate.length > 0) {
        return CommonMethods.success(res, 'Get plate', {
          plate,
          totalPlates: plate.length,
          totalRecords: data,
          totalCount: data,
        });
      } else {
        // return CommonMethods.success(res, 'Highest Bid Price(Plate)', data);
        return CommonMethods.error(res, 'Plate Not Found');
      }
    } else {
      const plate = await this.plateModel
        .find()
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));

      const data = await this.plateModel.find().count();

      const adminPlateIds = plate.map((i) => i._id);
      // console.log(adminPlateIds);

      const matchForPrice = await this.plateModel.find({
        status: 2,
        // expireStatus: { $ne: 1 },
        adminPlate_id: {
          $in: adminPlateIds,
        },
      });
      // console.log(matchForPrice);

      const stateName = await this.stateModel.find();
      plate.map((plate) => {
        matchForPrice.map((data) => {
          if (plate._id.toString() === data.adminPlate_id.toString()) {
            plate['price'] = data.price;
          }
        });
      });

      plate.map((plate) => {
        stateName.map((data) => {
          if (plate.state.toString() === data._id.toString()) {
            plate['state_name'] = data.state;
          }
        });
      });

      if (plate.length > 0) {
        return CommonMethods.success(res, 'Get plate', {
          plate,
          totalPlates: plate.length,
          totalRecords: data,
          totalCount: data,
        });
      } else {
        // return CommonMethods.success(res, 'Highest Bid Price(Plate)', data);
        return CommonMethods.error(res, 'Plate Not Found');
      }
    }
  }
}
