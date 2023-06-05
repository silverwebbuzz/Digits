import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class adminEditDTO {
  name: string;
  @IsString()
  @IsNotEmpty({ message: 'Email Required' })
  @IsString()
  email: string;
  phone: string;
  passport_number: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  state_name: string;
  zipCode: number;
  user_type: string;
  last_login: Date;
  updated_at: Date;
  created_at: Date;
}
