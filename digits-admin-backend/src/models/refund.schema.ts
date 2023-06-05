import * as mongoose from 'mongoose';

export const RefundSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, required: false },
    plate_id: { type: mongoose.Types.ObjectId, required: false },
    plate_number: { type: String, required: false },
    remainningPaymentPrice: { type: Number, required: false },
    bill_id: { type: String, required: false },
    remainningPaymentStatus: { type: String, required: false },
    paid_at: { type: String, required: false },
    created_at: { type: Date, default: Date.now },
    delivery_status: { type: Number, required: false },
    runner_id: { type: mongoose.Types.ObjectId, required: false },
    runner_status: { type: String, required: false },
  },
  { versionKey: false },
);
