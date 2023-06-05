import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CommonMethods } from 'src/utilities/common-methods';
import { Body } from '@nestjs/common';

export const stateSchema = new mongoose.Schema({
  state: { type: String, required: false },
});
