import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class MailDTO {
  @IsNotEmpty({ message: 'Email Required' })
  @IsString()
  email: string;
  link: string;
}
