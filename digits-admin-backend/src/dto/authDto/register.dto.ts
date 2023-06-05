import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Matches,
} from 'class-validator';

export class RegisterDTO {
  account_type: string;
  first_name: string;
  last_name: string;
  name: string;
  @IsNotEmpty({ message: 'Email Required' })
  @IsString()
  email: string;
  PIC_fullname: string;
  phone: string;
  user_type: string;
  state: string;
  state_name: string;
  @IsNotEmpty({ message: 'Password Required' })
  @IsString()
  @Matches(
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Weak password' },
  )
  password: string;
  status: string;
}
