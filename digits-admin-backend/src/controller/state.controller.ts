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
  HttpStatus,
} from '@nestjs/common';
import { stateManagement } from 'src/service/stateManagement/stateManagement';
import { stateDto } from 'src/dto/state.dto';

@Controller('state')
export class stateController {
  constructor(private stateManagement: stateManagement) {}

  @Get('getState/:userID')
  async getState(@Res() res, @Param('userID') userID) {
    await this.stateManagement.getState(res, userID);
  }
  @Get('/getAllstate')
  async getAllstate(@Res() res) {
    const state = await this.stateManagement.getAllstate();

    return res.status(HttpStatus.OK).json(state);
  }

  @Post('/state_create')
  async addstate(@Res() res, @Body() stateDto: stateDto) {
    await this.stateManagement.addstate(res, stateDto);
  }
}
