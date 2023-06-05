import { Schema } from 'mongoose';
const decimalField = {
  require: false,
  type: Schema.Types.Decimal128,
  get: (v: Schema.Types.Decimal128) => Number(v ? v.toString() : 0),
};
export const OrderSchema = new Schema(
  {
    plate_id: { type: Schema.Types.ObjectId, required: false },
    plate_number: { type: String, unique: false, required: false },
    orderID: { type: String, required: false },
    price: { type: Number, required: false },
    Total: { type: Number, required: false },
    transaction_fee: { type: Number, required: false },
    expires: { type: Number, required: false },
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    address1: { type: String, required: false },
    address2: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: Schema.Types.ObjectId, required: false },
    zipCode: { type: Number, required: false },
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false },
);
