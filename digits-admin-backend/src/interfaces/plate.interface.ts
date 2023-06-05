import { Document } from 'mongoose';

export interface Plate extends Document {
  user_id: string;
  plate_number: string;
  name: string;
  price: string;
  email: string;
  phone: string;
  state: string;
  state_name: string;
  adminPlate_id: string;
  file: string;
  status: string;
  sell_status: number;
  seller_level: string;
  runner_status: number;
  runner_id: string;
  filename: string;
  trans_id: string;
  payment_status: string;
  highest_bid: string;
  lowest_bid: string;
  add_by: number;
  created_at: Date;
  orderID: string;
}
