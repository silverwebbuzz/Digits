import { Schema } from 'mongoose';
const decimalField = {
  require: false,
  type: Schema.Types.Decimal128,
  get: (v: Schema.Types.Decimal128) => Number(v ? v.toString() : 0),
};

export const PurchaseSchema = new Schema(
  {
    plate_id: { type: Schema.Types.ObjectId, unique: false, required: true },
    plate_number: { type: String, required: false },
    buyer_id: { type: Schema.Types.ObjectId, required: false },
    owner_id: { type: Schema.Types.ObjectId, required: false },
    bid_price: { type: Number, required: false },
    sell_price: { type: Number, required: false },
    orderID: { type: String, required: false },
    trans_id: { type: String, required: false },
    payment_status: { type: String, required: false },
    runner_id: { type: Schema.Types.ObjectId, required: false },
    runner_status: { type: Number, required: false },
    delivery_status: { type: Number, required: false },
    buy_type: { type: Number, required: false },
    expires: { type: Number, required: false },
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false },
);
