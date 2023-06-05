import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema(
  {
    // Type: Personal
    account_type: { type: Number, required: false },
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    passport_number: { type: Number, required: false },
    category: { type: String, required: false },
    name: { type: String, required: false },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    authentication: { type: Number, default: 0 },
    company_name: { type: String, required: false },
    company_register_number: { type: Number, required: false },
    PIC_fullname: { type: String, required: false },
    phone: { type: Number, required: false },
    address1: { type: String, required: false },
    address2: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: mongoose.Types.ObjectId, required: false },
    zipCode: { type: Number, required: false },
    file: { type: String, required: false },
    al_file: { type: String, required: false },
    al_status: { type: Number, default: 0 },
    user_type: { type: Number, required: false },
    status: { type: Number, default: 0 },
    plate_count: { type: Number, default: 0 },
    total_sales: { type: Number, default: 0 },
    seller_level: { type: Number, required: false },
    isVerified: { type: Number, default: 0 },
    last_login: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

UserSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

// 0 = Bronze, 1=silver, 2= gold, 3= platinum
