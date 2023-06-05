import { Injectable, Req, Res, HttpStatus } from '@nestjs/common';
import { model, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/interfaces/user.interface';
import { PlateSchema } from '../../models/plate.schema';
import { CommonMethods } from 'src/utilities/common-methods';
import { Purchase } from 'src/interfaces/purchase.interface';
import { Plate } from 'src/interfaces/plate.interface';

@Injectable()
export class DashboardManagementService {
  constructor(
    @InjectModel('User') public readonly userModel: Model<User>,
    @InjectModel('Purchase') private readonly purchaseModel: Model<Purchase>,
    @InjectModel('Plate') private readonly plateModel: Model<Plate>,
  ) {}

  // fetch all users
  async getAllUser(): Promise<User[]> {
    const users = await this.userModel.find().exec();

    return users;
  }

  getallcount(options) {
    return this.userModel
      .find({
        $or: [{ user_type: 1 }, { user_type: 2 }, { user_type: 3 }],
      })
      .count(options)
      .exec();
  }

  countbysuperadmin(options) {
    return this.userModel
      .find({
        $or: [{ user_type: 1 }],
      })
      .count(options)
      .exec();
  }
  countbyadmin(options) {
    return this.userModel
      .find({
        $or: [{ user_type: 2 }],
      })
      .count(options)
      .exec();
  }
  countbyrunner(options) {
    return this.userModel
      .find({
        $or: [{ user_type: 3 }],
      })
      .count(options)
      .exec();
  }

  getallusercount(options) {
    return this.userModel
      .find({
        $or: [{ user_type: 4 }, { user_type: 5 }],
      })
      .count(options)
      .exec();
  }

  countbybuyer(options) {
    return this.userModel
      .find({
        $or: [{ user_type: 4 }],
      })
      .count(options)
      .exec();
  }

  countbyseller(options) {
    return this.userModel
      .find({
        $or: [{ user_type: 5 }],
      })
      .count(options)
      .exec();
  }

  async grossvalue() {
    return this.plateModel
      .aggregate([
        { $match: { sell_status: 0, add_by: 1 } },
        {
          $addFields: {
            totalPrice: { $toDouble: '$price' },
          },
        },
        { $group: { _id: 'null', sum: { $sum: '$totalPrice' } } },
      ])
      .then((res) => parseInt(res.map((d) => d.sum).toString()));
  }

  async getdata() {
    const user = this.userModel.aggregate([
      {
        $lookup: {
          from: 'plates',
          localField: 'email',
          foreignField: 'email',
          as: 'data',
        },
      },
    ]);
    return user;
  }

  async getChart(res: Response, year) {
    const years = year;
    let TODAY = `${years}-12-31T23:59:59`;
    let YEAR_BEFORE = `${years}-01-01T00:00:00`;
    const bidChart = await this.plateModel
      .find({
        sell_status: 1,
        add_by: 1,
        // status: 2,
        created_at: { $gte: YEAR_BEFORE, $lte: TODAY },
      })
      .then((result) => {
        let newMonthsArray = new Array();
        let monthsArray = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        let months = {};
        for (let i = parseInt(TODAY.substring(5, 7)); i < 12; i++) {
          let newMonth = monthsArray[i];
          newMonthsArray.push(newMonth);
          months[newMonth] = 0;
        }
        for (let i = 0; i < parseInt(TODAY.substring(5, 7)); i++) {
          let newMonth = monthsArray[i];
          newMonthsArray.push(newMonth);
          months[newMonth] = 0;
        }
        for (let i = 0; i < result.length; i++) {
          let getDate = result[i].created_at.toISOString();
          let month = parseInt(getDate.substring(5, 7));
          let monthName = monthsArray[month - 1];
          let date = monthName;
          let count = Number(months[date]) + 1;
          months[date] = count;
        }
        return months;
      });
    const soldChart = await this.plateModel
      .find({
        sell_status: 0,
        add_by: 1,
        created_at: { $gte: YEAR_BEFORE, $lte: TODAY },
      })
      .then((result) => {
        let newMonthsArray = new Array();
        let monthsArray = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        let months = {};
        for (let i = parseInt(TODAY.substring(5, 7)); i < 12; i++) {
          let newMonth = monthsArray[i];
          newMonthsArray.push(newMonth);
          months[newMonth] = 0;
        }
        for (let i = 0; i < parseInt(TODAY.substring(5, 7)); i++) {
          let newMonth = monthsArray[i];
          newMonthsArray.push(newMonth);
          months[newMonth] = 0;
        }
        for (let i = 0; i < result.length; i++) {
          let getDate = result[i].created_at.toISOString();
          let month = parseInt(getDate.substring(5, 7));
          let monthName = monthsArray[month - 1];
          let date = monthName;
          let count = Number(months[date]) + 1;
          months[date] = count;
        }
        return months;
      });
    const data = { bidChart, soldChart };
    if (data) {
      return CommonMethods.success(res, 'Success', data);
    } else {
      return CommonMethods.error(res, 'Data not exists');
    }
  }
}
