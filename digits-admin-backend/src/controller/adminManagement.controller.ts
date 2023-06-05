import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  Put,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { AdminManagementService } from 'src/service/adminManagement/adminMangement.service';
import { AdminManagementDTO } from 'src/dto/adminManagement.dto';
import { adminEditDTO } from 'src/dto/adminEdit.dto';
import { stateDto } from 'src/dto/state.dto';
import { QueryOptions } from '../service/plateManagement/paginationDto';
@Controller('adminManagement')
export class AdminManagementController {
  constructor(private adminManagementService: AdminManagementService) {}

  // add a customer
  @Post('/admin_create')
  async addUser(@Res() res, @Body() adminManagementDTO: AdminManagementDTO) {
    await this.adminManagementService.addUser(res, adminManagementDTO);
  }

  // Retrieve customers list
  @Get('/admin_list')
  async getAllUser(@Res() res, @Query() paginationDto: QueryOptions) {
    await this.adminManagementService.getAllAdminUser(res, paginationDto);
  }

  @Get('/runnerList')
  async runnerList(@Res() res, @Query() paginationDto: QueryOptions) {
    await this.adminManagementService.getAllRunnerUser(res, paginationDto);
  }

  // Fetch a particular customer using ID
  @Get('admin/:userID')
  async getUser(@Res() res, @Param('userID') userID) {
    await this.adminManagementService.getUser(res, userID);
  }

  @Post('/admin_editprofile')
  async editUser(
    @Res() res,
    @Query('userID') userID,
    @Body() adminEditDTO: adminEditDTO,
  ) {
    await this.adminManagementService.editUser(res, userID, adminEditDTO);
  }
  @Put('/admin_update')
  async updateUser(
    @Res() res,
    @Query('userID') userID,
    @Body() adminEditDTO: adminEditDTO,
  ) {
    await this.adminManagementService.updateUser(res, userID, adminEditDTO);
  }

  // Delete a customer
  @Delete('/admin_delete')
  async deleteUser(@Res() res, @Query('userID') userID) {
    await this.adminManagementService.deleteUser(res, userID);
  }

  @Post('upload_image')
  async uploadFile(@Res() res, @Body() body) {
    await this.adminManagementService.uploadFile(res, body);
  }

  // get image
  @Get('uploads/admin/:filename')
  getProfileImage(@Param('filename') filename, @Res() res) {
    return res.sendFile(filename, { root: 'uploads/admin' });
  }
}
