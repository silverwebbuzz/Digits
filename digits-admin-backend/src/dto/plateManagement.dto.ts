import { IsNotEmpty, IsString } from 'class-validator';
export class PlateManagementDTO {
  user_id: string;
  plate_number: string;
  name: string;
  price: string;
  @IsNotEmpty({ message: 'Email Required' })
  @IsString()
  email: string;
  phone: string;
  state: string;
  state_name: string;
  file: string;
  status: number;
  sell_status: number;
  seller_level: string;
  runner_status: number;
  add_by: number;
  runner_id: string;
  release_date: string;
  created_at: Date;
  trans_id: string;
  filename: string;
  highest_bid: string;
  lowest_bid: string;
  payment_status: string;
  delivery_status: number;
  order: string;
}
