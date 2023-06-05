import { Injectable, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Purchase } from 'src/interfaces/purchase.interface';
import { Order } from 'src/interfaces/orderDetails.interface';
import { PurchaseManagementDTO } from 'src/dto/purchaseManagement.dto';
import { CommonMethods } from 'src/utilities/common-methods';
import { User } from 'src/interfaces/user.interface';
import { UserManagementDTO } from 'src/dto/userManagement.dto';
import { Plate } from 'src/interfaces/plate.interface';
import { PlateManagementDTO } from 'src/dto/plateManagement.dto';
import { Refund } from 'src/interfaces/refund.interface';
import { QueryOptions } from '../plateManagement/paginationDto';
import { ObjectId } from 'mongodb';

@Injectable()
export class PurchaseManagementService {
  constructor(
    @InjectModel('Purchase') private readonly purchaseModel: Model<Purchase>,
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Plate') private readonly plateModel: Model<Plate>,
    @InjectModel('Refund') private readonly refundModel: Model<Refund>,
  ) {}

  async getPurchase(res: Response) {
    const purchase = await this.purchaseModel.find({
      runner_status: null,
      payment_status: 'true',
      buy_type: 1,
    });
    // console.log(purchase);

    const plate = await this.plateModel.find({
      status: 2,
      sell_type: 1,
      sell_status: { $ne: 0 },
      runner_status: null,
    });
    // console.log(plate);

    const data = [...purchase, ...plate];

    if (data) {
      return CommonMethods.success(res, 'Success', data);
    } else {
      return CommonMethods.error(res, 'Purchase does not exists');
    }
  }
  // async getPurchase(res: Response) {
  //   const purchase = await this.purchaseModel.find({
  //     runner_status: null,
  //     payment_status: true,
  //     buy_type: { $ne: 'Place A Bid' },
  //   });

  //   const purchases = await this.purchaseModel.aggregate([
  //     {
  //       $match: {
  //         runner_status: null,
  //         payment_status: true,
  //         buy_type: 'Place A Bid',
  //       },
  //     },
  //     {
  //       $lookup: {
  //         from: 'refunds',
  //         localField: 'buyer_id',
  //         foreignField: 'user_id',
  //         pipeline: [
  //           { $match: { remanningPaymentStatus: 'true', runner_status: null } },
  //         ],
  //         as: 'refundData',
  //       },
  //     },
  //   ]);

  //   const plate = await this.plateModel.find({
  //     status: 2,
  //     sell_status: { $ne: '0' },
  //   });
  //   const data = [...purchase, ...purchases, ...plate];
  //   if (data) {
  //     return CommonMethods.success(res, 'Success', data);
  //   } else {
  //     return CommonMethods.error(res, 'Purchase does not exists');
  //   }
  // }

  //get orders
  async getOrders(
    res: Response,
    purchaseManagementDTO: PurchaseManagementDTO,
    options: QueryOptions,
  ): Promise<Order> {
    let filterStatus: any;
    const page = options.page || 1;
    const limit = options.limit || 20;
    switch (options.filterBy) {
      case 'All':
        filterStatus = '';
        break;
      case 'DB':
        filterStatus = 'DB';
        break;
      case 'DS':
        filterStatus = 'DS';
        break;
      default:
        filterStatus = '';
        break;
    }
    const plate_id = { purchaseManagementDTO };

    // const getOrder = await this.orderModel
    //   .aggregate([
    //     {
    //       $set: {
    //         order_prefix: 'DB',
    //       },
    //     },
    //     {
    //       $match: {
    //         $and: [
    //           {
    //             $or: [
    //               {
    //                 plate_number: { $regex: options.search, $options: 'i' },
    //               },
    //               { name: { $regex: options.search, $options: 'i' } },
    //               { phone: { $regex: options.search, $options: 'i' } },
    //               {
    //                 orderID: { $regex: options.search, $options: 'i' },
    //               },
    //             ],
    //           },
    //           filterStatus === ''
    //             ? {}
    //             : {
    //                 order_prefix: filterStatus,
    //               },
    //         ],
    //       },
    //     },

    //     // { $unwind: '$order_data' },
    //   ])
    //   .skip((Number(page) - 1) * Number(limit))
    //   .limit(Number(limit))
    //   .exec();

    // const data1 = await this.orderModel.find().count();

    const purchases = await this.purchaseModel
      .aggregate([
        {
          $addFields: {
            buyerID: { $toObjectId: '$buyer_id' },
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'buyerID',
            foreignField: '_id',
            as: 'name',
          },
        },
        {
          $set: {
            name: { $arrayElemAt: ['$name.first_name', 0] },
            phone: { $arrayElemAt: ['$name.phone', 0] },
            order_prefix: 'DB',
          },
        },
        {
          $unset: ['buyerID'],
        },
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    plate_number: { $regex: options.search, $options: 'i' },
                  },
                  { name: { $regex: options.search, $options: 'i' } },
                  { phone: { $regex: options.search, $options: 'i' } },
                  {
                    orderID: { $regex: options.search, $options: 'i' },
                  },
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    order_prefix: filterStatus,
                  },
            ],
          },
        },
        // { $unwind: '$order_data' },
      ])
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .exec();
    const data2 = await this.purchaseModel.find().count();

    const plates = await this.plateModel.aggregate([
      {
        $match: { add_by: 1 },
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
          name: { $arrayElemAt: ['$name.first_name', 0] },
          phone: { $arrayElemAt: ['$name.phone', 0] },
          order_prefix: 'DS',
        },
      },

      {
        $match: {
          $and: [
            {
              $or: [
                {
                  plate_number: { $regex: options.search, $options: 'i' },
                },
                { name: { $regex: options.search, $options: 'i' } },
                { phone: { $regex: options.search, $options: 'i' } },
                {
                  orderID: { $regex: options.search, $options: 'i' },
                },
              ],
            },
            filterStatus === ''
              ? {}
              : {
                  order_prefix: filterStatus,
                },
          ],
        },
      },
    ]);
    // .skip((Number(page) - 1) * Number(limit))
    // .limit(Number(limit))
    // .exec();
    const data3 = await this.plateModel
      .find({
        add_by: 1,
      })
      .count();

    // const plates = await this.plateModel.find({
    //   sell_status: '2',
    //   add_by: 'Seller',
    // })
    const orders = [...purchases, ...plates];
    const data4 = data2 + data3;
    // const aaa = orders
    if (options.filterBy === 'All' || options.filterBy === '') {
      if (orders) {
        return CommonMethods.success(res, 'Orders List fetched successfully', {
          orders,
          filterCount: data4,
          totalRecord: data4,
        });
      } else {
        return CommonMethods.error(res, 'No Order exists');
      }
    } else {
      if (options.filterBy === 'DB') {
        if (orders) {
          return CommonMethods.success(
            res,
            'Orders List fetched successfully',
            {
              orders: [...purchases],
              filterCount: data2,
              totalRecord: data2,
            },
          );
        } else {
          return CommonMethods.error(res, 'No Order exists');
        }
      } else {
        return CommonMethods.success(res, 'Orders List fetched successfully', {
          orders: [...plates],
          filterCount: data3,
          totalRecord: data3,
        });
      }
    }
  }

  async getPurchasedPlate(res: Response): Promise<Purchase> {
    const purchases = await this.purchaseModel.aggregate([
      // { $match: { buyer_id: user_id, plate_id: plate_id } },
      {
        $lookup: {
          from: 'orders',
          localField: 'orderID',
          foreignField: 'orderID',
          as: 'purchased_data',
        },
      },
    ]);

    if (purchases.length > 0) {
      return CommonMethods.success(
        res,
        'Purchase List fetched successfully',
        purchases,
      );
    } else {
      return CommonMethods.error(res, 'No Purchase exists');
    }
  }

  async runnerAssignmentPlate(
    res: Response,
    options: QueryOptions,
  ): Promise<Purchase[]> {
    let filterStatus: any;
    const page = options.page || 1;
    const limit = options.limit || 20;
    switch (options.filterBy) {
      case 'All':
        filterStatus = '';
        break;
      case 'Transfer Ownership':
        filterStatus = 0;
        break;

      case 'Mark Completed':
        filterStatus = 1;
        break;
      case 'Completed':
        filterStatus = 2;
        break;
      default:
        filterStatus = '';
        break;
    }
    const plates = await this.purchaseModel
      .aggregate([
        { $match: { runner_id: { $exists: true } } },
        // {
        //   $addFields: {
        //     runnerID: { $toObjectId: '$runner_id' },
        //   },
        // },
        {
          $lookup: {
            from: 'users',
            localField: 'runner_id',
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
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    runner_name: { $regex: options.search, $options: 'i' },
                  },
                  { plate_number: { $regex: options.search, $options: 'i' } },
                  // { phone: { $regex: options.search, $options: 'i' } },
                  // {
                  //   category: { $regex: options.search, $options: 'i' },
                  // },
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    delivery_status: filterStatus,
                  },
            ],
          },
        },
      ])
      .sort({ created_at: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const plate = await this.plateModel
      .aggregate([
        { $match: { add_by: 1, runner_id: { $exists: true } } },
        // {
        //   $addFields: {
        //     runnerID: { $toObjectId: '$runner_id' },
        //   },
        // },
        {
          $lookup: {
            from: 'users',
            localField: 'runner_id',
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
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    runner_name: { $regex: options.search, $options: 'i' },
                  },
                  { plate_number: { $regex: options.search, $options: 'i' } },
                  // { phone: { $regex: options.search, $options: 'i' } },
                  // {
                  //   category: { $regex: options.search, $options: 'i' },
                  // },
                ],
              },
              filterStatus === ''
                ? {}
                : {
                    delivery_status: filterStatus,
                  },
            ],
          },
        },
      ])
      .sort({ created_at: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const platesCount = await this.purchaseModel
      .find({ add_by: 1, runner_id: { $exists: true } })
      .count();

    const plateCount = await this.plateModel
      .find({ add_by: 1, runner_id: { $exists: true } })
      .count();

    const record = platesCount + plateCount;
    // const record = platesCount;
    const data = [...plates, ...plate];
    // const data = [...plates];
    if (data) {
      return CommonMethods.success(res, 'Plates List fetched successfully', {
        data,
        filterCount: data.length,
        totalRecord: record,
      });
    } else {
      return CommonMethods.error(res, 'No plates exists');
    }
  }

  async getPurchaseByPlateID(res: Response, plateID): Promise<Purchase> {
    const plates = await this.purchaseModel.aggregate([
      { $match: { plate_id: plateID } },
      {
        $lookup: {
          from: 'plates',
          localField: 'plate_number',
          foreignField: 'plate_number',
          as: 'owner_name',
        },
      },
      {
        $set: {
          owner_name: { $arrayElemAt: ['$owner_name.name', 0] },
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
    ]);
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
  async editPurchase(
    res: Response,
    purchaseManagementDTO: PurchaseManagementDTO,
    plateManagementDTO: PlateManagementDTO,
  ): Promise<any> {
    const plate_number = purchaseManagementDTO.plate_number;

    const plate = await this.purchaseModel.findOne({
      plate_number: plate_number,
      buy_type: 1,
    });

    if (plate) {
      purchaseManagementDTO.runner_status = 0;
      const updatePurchase = await this.purchaseModel.findOneAndUpdate(
        { plate_number: plate_number, buy_type: 1 },
        purchaseManagementDTO,
        { new: true },
      );

      if (!updatePurchase) {
        return CommonMethods.error(res, 'Purchase not success');
      } else {
        return CommonMethods.success(
          res,
          'Purchase details added successfully',
          updatePurchase,
        );
      }
    } else {
      const plate_number = plateManagementDTO.plate_number;

      plateManagementDTO.runner_status = 0;
      const updatePlate = await this.plateModel.findOneAndUpdate(
        { plate_number: plate_number, add_by: 1 },
        plateManagementDTO,
        { new: true },
      );

      if (!updatePlate) {
        return CommonMethods.error(res, 'plate not success');
      } else {
        return CommonMethods.success(
          res,
          'Plate details added successfully',
          updatePlate,
        );
      }
    }
  }

  async editRunnerStatus(
    res: Response,
    purchaseManagementDTO: PurchaseManagementDTO,
    plateManagementDTO: PlateManagementDTO,
  ): Promise<any> {
    const plate_number = purchaseManagementDTO.plate_number;
    const order = purchaseManagementDTO.order;
    const plate = await this.purchaseModel.findOne({
      plate_number: plate_number,
      buy_type: 1,
    });
    if (plate && order === 'DB') {
      const updatePurchase = await this.purchaseModel.findOneAndUpdate(
        { plate_number: plate_number, delivery_status: { $ne: null } },
        purchaseManagementDTO,
        { new: true },
      );

      if (!updatePurchase) {
        return CommonMethods.error(res, 'Purchase not success');
      } else {
        return CommonMethods.success(
          res,
          'Purchase details update successfully',
          updatePurchase,
        );
      }
    } else {
      const plate_number = plateManagementDTO.plate_number;

      const updatePlate = await this.plateModel.findOneAndUpdate(
        {
          add_by: 1,
          plate_number: plate_number,
          delivery_status: { $ne: null },
        },
        plateManagementDTO,
        { new: true },
      );

      if (!updatePlate) {
        return CommonMethods.error(res, 'plate not success');
      } else {
        return CommonMethods.success(
          res,
          'Plate details update successfully',
          updatePlate,
        );
      }
    }
  }

  async getRunnerPlate(res: Response, runner_id): Promise<Purchase[]> {
    const query = { _id: new ObjectId(runner_id) };
    const plates = await this.purchaseModel
      .aggregate([
        { $match: { runner_id: query._id } },
        {
          $lookup: {
            from: 'users',
            localField: 'buyer_id',
            foreignField: '_id',
            as: 'owner_name',
          },
        },
        {
          $set: {
            owner_name: { $arrayElemAt: ['$owner_name.name', 0] },
            first_name: { $arrayElemAt: ['$owner_name.first_name', 0] },
            last_name: { $arrayElemAt: ['$owner_name.last_name', 0] },
            phone: { $arrayElemAt: ['$owner_name.phone', 0] },
          },
        },
        {
          $unset: [
            'runnerID',
            'name',
            'price',
            'email',
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
    // const plate = await this.plateModel.find({ runner_id: runner_id });
    const plate = await this.plateModel.aggregate([
      { $match: { runner_id: query._id } },
      {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'owner_name',
        },
      },
      {
        $set: {
          owner_name: { $arrayElemAt: ['$owner_name.name', 0] },
          first_name: { $arrayElemAt: ['$owner_name.first_name', 0] },
          last_name: { $arrayElemAt: ['$owner_name.last_name', 0] },
          phone: { $arrayElemAt: ['$owner_name.phone', 0] },

          company_name: { $arrayElemAt: ['$owner_name.company_name', 0] },
        },
      },
    ]);
    const data = [...plates, ...plate];
    if (plates) {
      return CommonMethods.success(
        res,
        'Plates List fetched successfully',
        data,
      );
    } else {
      return CommonMethods.error(res, 'No plates exists');
    }
  }

  async getAL(res: Response, options: QueryOptions): Promise<User> {
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
    const updatePurchase = await this.userModel
      .find({
        account_type: 2,
        $and: [
          {
            $or: [
              {
                email: { $regex: options.search, $options: 'i' },
              },
              { company_name: { $regex: options.search, $options: 'i' } },
            ],
          },
          filterStatus === '' ? {} : { al_status: filterStatus },
        ],
      })
      .sort({ created_at: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    // console.log(updatePurchase, 'updatePurchase');

    const totalAL = await this.userModel.find({ account_type: 2 }).count();
    if (!updatePurchase) {
      return CommonMethods.error(res, 'Data not Get');
    } else {
      if (options.filterBy === 'all' || options.filterBy === '') {
        return CommonMethods.success(res, 'User Get Successfully', {
          updatePurchase,
          filterCount: updatePurchase.length,
          totalRecord: totalAL,
        });
      } else {
        return CommonMethods.success(res, 'User Get Successfully', {
          updatePurchase,
          filterCount: updatePurchase.length,
          totalRecord: updatePurchase.length,
        });
      }
    }
  }

  async editAlStatus(
    res: Response,
    _id,
    userManagementDTO: UserManagementDTO,
  ): Promise<User> {
    const updateAl = await this.userModel.findByIdAndUpdate(
      { _id },
      userManagementDTO,
      { new: true },
    );

    if (!updateAl) {
      return CommonMethods.error(res, 'Data Not Update');
    } else {
      return CommonMethods.success(res, 'User Update Successfully', updateAl);
    }
  }

  async getOrderId(
    res: Response,

    purchaseManagementDTO: PurchaseManagementDTO,
    plateManagementDTO: PlateManagementDTO,
  ): Promise<any> {
    const plate_number = purchaseManagementDTO.plate_number;

    const plate = await this.purchaseModel.findOne({
      plate_number: plate_number,
      buy_type: 1,
    });
    if (plate) {
      const data = plate.orderID;

      const order_prefix = data.slice(0, 2);
      const order_id = data.slice(2, 16);

      const user = [plate, { order_prefix: order_prefix }];
      const getOrder = await this.purchaseModel.aggregate([
        { $match: { plate_number: plate_number } },

        {
          $set: {
            order_prefix: order_prefix,
            order_id: order_id,
          },
        },

        // { $unwind: '$order_data' },
      ]);
      return CommonMethods.success(res, 'Plate added successfully', getOrder);
    } else {
      const plate_number = plateManagementDTO.plate_number;

      const platetbl = await this.plateModel.findOne({
        plate_number: plate_number,
        add_by: 1,
      });

      const orderid = platetbl.orderID;

      const order_prefix = orderid.slice(0, 2);
      const order_id = orderid.slice(2, 16);

      const user = [platetbl, { order_prefix: order_prefix }];
      const getOrder = await this.plateModel.aggregate([
        { $match: { plate_number: plate_number } },

        {
          $set: {
            order_prefix: order_prefix,
            order_id: order_id,
          },
        },

        // { $unwind: '$order_data' },
      ]);
      return CommonMethods.success(res, 'Plate added successfully', getOrder);
    }
  }
}
