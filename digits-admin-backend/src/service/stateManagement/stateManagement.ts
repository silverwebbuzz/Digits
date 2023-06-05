import { Injectable, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { state } from 'src/interfaces/state.interface';
import { AdminManagementDTO } from 'src/dto/adminManagement.dto';
import { adminEditDTO } from 'src/dto/adminEdit.dto';
import { stateDto } from 'src/dto/state.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const base64ToImage = require('base64-to-image');
import { CommonMethods } from 'src/utilities/common-methods';

@Injectable()
export class stateManagement {
  constructor(
    @InjectModel('state') private readonly stateModel: Model<state>,
  ) {}

  //get state
  async getState(res: Response, userID): Promise<state> {
    const user = await this.stateModel.findById(userID).exec();
    if (user) {
      return CommonMethods.success(res, 'Success', user);
    } else {
      return CommonMethods.error(res, 'User does not exists');
    }
  }

  async addstate(res: Response, stateDto: stateDto) {
    const newUser = await new this.stateModel(stateDto);
    if (newUser) {
      await newUser.save();
      return CommonMethods.success(res, 'User Created', newUser);
    } else {
      return CommonMethods.error(res, 'Already Exists');
    }
  }

  async getAllstate(): Promise<state[]> {
    const states = await this.stateModel.find().exec();
    return states;
  }
}
