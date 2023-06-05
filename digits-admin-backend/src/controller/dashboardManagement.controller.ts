import { Controller, Get, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CommonMethods } from 'src/utilities/common-methods';
import { DashboardManagementService } from 'src/service/dashboardManagement/dashboardManagement.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Purchase } from 'src/interfaces/purchase.interface';
import { Plate } from 'src/interfaces/plate.interface';
import { log } from 'console';

@Controller('dashboardManagement')
export class DashboardManagementController {
  // constructor(private dashboardManagementService: DashboardManagementService,private dashboardplateManagementService: DashboardplateManagementService) {}
  constructor(
    @InjectModel('Purchase') private readonly purchaseModel: Model<Purchase>,
    @InjectModel('Plate') private readonly plateModel: Model<Plate>,
    public readonly dashboardManagementService: DashboardManagementService,
  ) {}

  @Get('/count_list')
  async GetAllAdminUser(@Res() res) {
    const users = await this.dashboardManagementService.getAllUser();
    const total_admins = await this.dashboardManagementService.getallcount(
      users,
    );
    const super_admin = await this.dashboardManagementService.countbysuperadmin(
      users,
    );
    const admin = await this.dashboardManagementService.countbyadmin(users);
    const runner = await this.dashboardManagementService.countbyrunner(users);
    const total_users = await this.dashboardManagementService.getallusercount(
      users,
    );
    const buyer = await this.dashboardManagementService.countbybuyer(users);
    const seller = await this.dashboardManagementService.countbyseller(users);
    const grossvalue = await this.dashboardManagementService.grossvalue();
    // const plate = await this.dashboardplateManagementService.getallcountplate(
    //   users,
    // );
    const bidPlateCount = await this.plateModel
      .find({
        sell_status: 1,
        add_by: 1,
        // status: 2,
      })
      // .distinct('plate_number')
      .count();

    const soldPlate = await this.plateModel
      .find({ sell_status: 0, add_by: 1 })
      .count();

    // await this.plateModel.ensureIndexes({ add_by: 1 });
    const sellPlateCount = await this.plateModel.countDocuments({ add_by: 1 });

    const plateCount = await this.plateModel.estimatedDocumentCount();

    const totalPLateCount = plateCount - sellPlateCount;

    const data = {
      total_admins,
      super_admin,
      admin,
      runner,
      total_users,
      buyer,
      seller,
      bidPlateCount,
      soldPlate,
      totalPLateCount,
      totalTransactions: soldPlate,
      totalMYR: grossvalue,
    };
    return CommonMethods.success(res, 'Success', data);
  }

  @Get('/list')
  async getdata(@Res() res) {
    const users = await this.dashboardManagementService.getdata();

    return res.status(HttpStatus.OK).json(users);
  }

  @Get('chart/:year')
  async getChart(@Res() res, @Param('year') year) {
    await this.dashboardManagementService.getChart(res, year);
  }
}
