import { Schema } from 'mongoose';
const decimalField = {
  require: false,
  type: Schema.Types.Decimal128,
  get: (v: Schema.Types.Decimal128) => Number(v ? v.toString() : 0),
};
export const adminPlateSchema = new Schema(
  {
    plate_number: { type: String, unique: false, required: false },
    name: { type: String, required: false },
    user_id: { type: Schema.Types.ObjectId, required: false },
    price: { type: Number, required: false },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    state: { type: Schema.Types.ObjectId, required: false },
    state_name: { type: String, required: false },
    adminPlate_id: { type: Schema.Types.ObjectId, required: false },
    file: { type: String, required: false },
    status: { type: Number, required: false },
    sell_status: { type: Number, required: false },
    orderID: { type: String, required: false },
    seller_level: { type: Number, required: false },
    runner_id: { type: Schema.Types.ObjectId, required: false },
    // runner_status: { type: Number, default: 0, required: false },
    runner_status: { type: String, required: false },
    add_by: { type: Number, default: 1, required: false },
    release_date: { type: String, required: false },
    created_at: { type: Date, default: Date.now },
    highest_bid: { type: Number, required: false },
    lowest_bid: { type: Number, required: false },
    trans_id: { type: String, required: false },
    payment_status: { type: String, required: false },
    delivery_status: { type: Number, required: false },
    transaction_fee: { type: Number, required: false },
    Total: { type: Number, required: false },
    sell_type: { type: Number, required: false },
    // expires: { type: Number, default: 0 },
    expires: { type: Number, required: false },

    expireStatus: { type: Number, default: 0, required: false },
  },
  { versionKey: false },
);
