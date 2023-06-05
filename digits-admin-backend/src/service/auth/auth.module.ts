import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from '../../controller/auth.controller';
import { UserService } from 'src/service/auth/user.service';
import { UserModule } from 'src/service/userManagement/user.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
