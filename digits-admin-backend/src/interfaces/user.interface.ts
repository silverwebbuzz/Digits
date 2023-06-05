import { Document } from 'mongoose';

export interface User extends Document {
  account_type: string;
  first_name: string;
  last_name: string;
  passport_number: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  state_name: string;
  zipCode: number;
  name: string;
  email: string;
  password: string;
  company_name: string;
  PIC_fullname: string;
  phone: string;
  file: string;
  al_file: string;
  al_status: string;
  user_type: string;
  seller_level: string;
  last_login: Date;
  release_date: string;
  updated_at: Date;
  created_at: Date;
}
