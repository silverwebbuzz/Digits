import { Document, Schema } from 'mongoose';

export interface Purchase extends Document {
  plate_id: string;
  plate_number: string;
  buyer_id: string;
  ownerId: string;
  bid_price: string;
  sell_price: string;
  orderID: string;
  runner_status: number;
  runner_id: string;
  trans_id: string;
  payment_status: string;
  delivery_status: number;
  buy_type: string;
  expires: number;
  created_at: Date;
}
