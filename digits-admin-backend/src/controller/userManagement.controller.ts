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
import { UserManagementService } from 'src/service/userManagement/userMangement.service';
import { UserManagementDTO } from 'src/dto/userManagement.dto';
import { QueryOptions } from '../service/plateManagement/paginationDto';
import { DeleteUserDto } from 'src/dto/deleteUser.dto';

@Controller('userManagement')
export class UserManagementController {
  constructor(private userManagementService: UserManagementService) {}

  // add a customer
  @Post('/create')
  async addUser(@Res() res, @Body() userManagementDTO: UserManagementDTO) {
    await this.userManagementService.addUser(res, userManagementDTO);
  }

  // Retrieve customers list
  @Get('/users')
  async getAllUser(@Res() res, @Query() paginationDto: QueryOptions) {
    await this.userManagementService.getAllUser(res, paginationDto);
  }

  // Fetch a particular customer using ID
  @Get('user/:userID')
  async getUser(@Res() res, @Param('userID') userID) {
    await this.userManagementService.getUser(res, userID);
  }
  @Post('/editprofile')
  async editUser(
    @Res() res,
    @Query('userID') userID,
    @Body() userManagementDTO: UserManagementDTO,
  ) {
    await this.userManagementService.updateUser(res, userID, userManagementDTO);
  }
  @Put('/update')
  async updateUser(
    @Res() res,
    @Query('userID') userID,
    @Body() userManagementDTO: UserManagementDTO,
  ) {
    await this.userManagementService.updateUser(res, userID, userManagementDTO);
  }

  // Delete a customer
  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID') userID) {
    await this.userManagementService.deleteUser(res, userID);
    // if (!user) throw new NotFoundException('User does not exist');
    // return res.status(HttpStatus.OK).json({
    //   message: 'User has been deleted',
    //   user,
    // });
  }

  @Post('al_upload_file/:_id')
  async al_upload(@Res() res, @Body() body, @Param('_id') _id) {
    await this.userManagementService.alUploadFile(res, body, _id);
  }

  @Post('upload_image')
  async uploadFile(@Res() res, @Body() body) {
    await this.userManagementService.uploadFile(res, body);
  }

  // get image
  @Get('uploads/user/:filename')
  getProfileImage(@Param('filename') filename, @Res() res) {
    return res.sendFile(filename, { root: 'uploads/user' });
  }
  @Delete('/deleteMultipleUser')
  async deleteMultipleUser(
    @Res() res,
    @Body() deleteUserDto: DeleteUserDto,
  ) {
    await this.userManagementService.deleteMultipleUser(res, deleteUserDto);
  }
}
