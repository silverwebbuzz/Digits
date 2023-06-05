import {
  Controller,
  Get,
  Res,
  Body,
  Put,
  Post,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PurchaseManagementService } from 'src/service/purchaseManagement/purchaseManagement.service';
import { PurchaseManagementDTO } from 'src/dto/purchaseManagement.dto';
import { UserManagementDTO } from 'src/dto/userManagement.dto';
import { PlateManagementDTO } from 'src/dto/plateManagement.dto';
import { QueryOptions } from '../dto/pagination.dto';

@Controller('purchase')
export class PurchaseManagementController {
  constructor(private purchaseManagementService: PurchaseManagementService) {}

  @Get('getPurchase')
  async getPurchase(@Res() res) {
    await this.purchaseManagementService.getPurchase(res);
  }

  @Get('/getPurchasedPlate')
  async getPurchasedPlate(@Res() res) {
    await this.purchaseManagementService.getPurchasedPlate(res);
  }

  @Get('/runnerAssignmentList')
  async runnerAssignmentPlate(
    @Res() res,
    @Query() paginationDto: QueryOptions,
  ) {
    await this.purchaseManagementService.runnerAssignmentPlate(
      res,
      paginationDto,
    );
  }

  @Get('getplateByPlateID/:plateID')
  async getPurchaseByPlateID(@Res() res, @Param('plateID') plateID) {
    await this.purchaseManagementService.getPurchaseByPlateID(res, plateID);
  }

  @Post('/addAssignedPlate')
  async editPurchase(
    @Res() res,
    @Body() purchaseManagementDTO: PurchaseManagementDTO,
    @Body() plateManagementDTO: PlateManagementDTO,
  ) {
    await this.purchaseManagementService.editPurchase(
      res,
      purchaseManagementDTO,
      plateManagementDTO,
    );
  }

  @Post('/editAssignedStatus')
  async editRunnerStatus(
    @Res() res,
    @Body() purchaseManagementDTO: PurchaseManagementDTO,
    @Body() plateManagementDTO: PlateManagementDTO,
  ) {
    await this.purchaseManagementService.editRunnerStatus(
      res,
      purchaseManagementDTO,
      plateManagementDTO,
    );
  }

  @Get('getAssignedPlate/:runner_id')
  async getRunnerPlate(@Res() res, @Param('runner_id') runner_id) {
    await this.purchaseManagementService.getRunnerPlate(res, runner_id);
  }

  // @Post('getAssignedName')
  // async getRunnerName(
  //   @Res() res,
  //   @Body() plateManagementDTO: PlateManagementDTO,
  // ) {
  //   await this.purchaseManagementService.getRunnerName(res, plateManagementDTO);
  // }

  @Get('/getOrders')
  async getOrders(
    @Res() res,
    @Body() purchaseManagementDTO: PurchaseManagementDTO,
    @Query() paginationDto: QueryOptions,
  ) {
    await this.purchaseManagementService.getOrders(
      res,
      purchaseManagementDTO,
      paginationDto,
    );
  }

  // @Get('/getOrderss')
  // async getOrderss(
  //   @Res() res,
  //   @Body() purchaseManagementDTO: PurchaseManagementDTO,
  //   plateManagementDTO: PlateManagementDTO,
  // ) {
  //   await this.purchaseManagementService.getOrders(
  //     res,
  //     purchaseManagementDTO,
  //     plateManagementDTO,
  //   );
  // }

  @Get('getAL')
  async getRunn(@Res() res, @Query() paginationDto: QueryOptions) {
    await this.purchaseManagementService.getAL(res, paginationDto);
  }

  @Put('editAlStatus/:_id')
  async editAlStatus(
    @Res() res,
    @Param('_id') _id,
    @Body() userManagementDTO: UserManagementDTO,
  ) {
    await this.purchaseManagementService.editAlStatus(
      res,
      _id,
      userManagementDTO,
    );
  }

  @Post('/getOrderId')
  async addPlate(
    @Res() res,
    @Body() purchaseManagementDTO: PurchaseManagementDTO,
    @Body() plateManagementDTO: PlateManagementDTO,
  ) {
    await this.purchaseManagementService.getOrderId(
      res,
      purchaseManagementDTO,
      plateManagementDTO,
    );
  }
}
