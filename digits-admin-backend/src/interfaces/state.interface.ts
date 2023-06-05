import { Document, Schema } from 'mongoose';

export interface state extends Document {
  state: string;
}
