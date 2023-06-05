import { Document } from 'mongoose';
export interface Refund extends Document {
  user_id: string;
  plate_id: string;
  plate_number: number;
  remainningPaymentPrice: string;
  bill_id: string;
  remainningPaymentStatus: string;
  paid_at: string;
  created_at: Date;
}
