import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { CommonMethods } from 'src/utilities/common-methods';
import { PlateManagementService } from 'src/service/plateManagement/plateMangement.service';
import { PlateManagementDTO } from 'src/dto/plateManagement.dto';
import { MailDTO } from 'src/mail/mail.dto';
import { QueryOptions } from '../service/plateManagement/paginationDto';
@Controller('plateManagement')
export class PlateManagementController {
  constructor(private plateManagementService: PlateManagementService) {}

  // add a plate
  @Post('/add_plate')
  async addPlate(@Res() res, @Body() plateManagementDTO: PlateManagementDTO) {
    await this.plateManagementService.addPlate(res, plateManagementDTO);
  }

  @Get('/getRunnerName/:plateID')
  async getRunnerName(@Res() res, @Param('plateID') plateID) {
    await this.plateManagementService.getRunnerName(res, plateID);
  }

  // Retrieve plate list
  @Get('/plates')
  async getAllPlates(@Res() res, @Query() paginationDto: QueryOptions) {
    await this.plateManagementService.getAllPlates(res, paginationDto);
  }

  @Get('/searchPlate')
  async searchPlate(@Res() res, @Query() paginationDto: QueryOptions) {
    await this.plateManagementService.searchPlate(res, paginationDto);
  }

  @Get('/varificationPlates')
  async getAllVarificationPlates(
    @Res() res,
    @Query() paginationDto: QueryOptions,
  ) {
    await this.plateManagementService.getAllVarificationPlates(
      res,
      paginationDto,
    );
  }

  // Fetch a particular plate using ID
  @Get('plate/:plateID')
  async getPlate(@Res() res, @Param('plateID') plateID) {
    await this.plateManagementService.getPlate(res, plateID);
  }
  @Put('/editplate')
  async editPlate(
    @Res() res,
    @Query('plateID') plateID,
    @Body() plateManagementDTO: PlateManagementDTO,
    // MailDTO: MailDTO,
  ) {
    await this.plateManagementService.editPlate(
      res,
      plateID,
      plateManagementDTO,
      // MailDTO,
    );
  }
  @Put('/editPlateStatus')
  async editPlateStatus(
    @Res() res,
    @Query('plateID') plateID,
    @Body() plateManagementDTO: PlateManagementDTO,
    // MailDTO: MailDTO,
  ) {
    await this.plateManagementService.editPlateStatus(
      res,
      plateID,
      plateManagementDTO,
      // MailDTO,
    );
  }

  // Delete a plate
  @Delete('/delete')
  async deletePlate(@Res() res, @Query('plateID') plateID) {
    await this.plateManagementService.deletePlate(res, plateID);
  }

  @Get('/count_list')
  async GetAllPlates(@Res() res) {
    const users = await this.plateManagementService.GetAllPlates();
    const totalplates = await this.plateManagementService.countallplates(users);
    const onbid = await this.plateManagementService.getallbidcount(users);
    const onSold = await this.plateManagementService.getallSoldcount(users);

    const data = { totalplates, onbid, onSold };

    return CommonMethods.success(res, 'Success', data);
  }

  @Post('upload_image')
  async uploadFile(@Res() res, @Body() body) {
    await this.plateManagementService.uploadFile(res, body);
  }

  // get image
  @Get('uploads/plate/:filename')
  getProfileImage(@Param('filename') filename, @Res() res) {
    return res.sendFile(filename, { root: 'uploads/plate' });
  }
  @Delete('/deleteMultiplePlate')
  async deleteMultiplePlate(
    @Res() res,
    @Body('selected_row') selected_row: string[],
  ) {
    await this.plateManagementService.deleteMultiplePlates(res, selected_row);
  }

  @Delete('/deleteMultipleOrder')
  async deleteMultipleOrder(
    @Res() res,
    @Body('selected_row') selected_row: string[],
  ) {
    await this.plateManagementService.deleteMultipleOrders(res, selected_row);
  }
  @Get('/runnerAssignmentPlate')
  async runnerAssignmentPlate(@Res() res) {
    await this.plateManagementService.runnerAssignmentPlate(res);
  }

  @Get('/assignmentPlatesList/:runner_id')
  async assignmentPlatesList(@Param('runner_id') runner_id, @Res() res) {
    await this.plateManagementService.assignmentPlatesList(res, runner_id);
  }

  @Post('upload_CSV')
  async uploadCSV(@Res() res, @Body() body) {
    await this.plateManagementService.uploadCSV(res, body);
  }

  @Get('/getOwnerDetail')
  async getOwnerDetail(@Res() res, @Query('userID') userID) {
    await this.plateManagementService.getOwnerDetail(res, userID);
  }
}
