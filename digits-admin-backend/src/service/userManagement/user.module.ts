import { Module } from '@nestjs/common';
import { UserService } from '../auth/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../models/user.schema';
import { UserManagementController } from 'src/controller/userManagement.controller';
import { UserManagementService } from 'src/service/userManagement/userMangement.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserService, UserManagementService],
  controllers: [UserManagementController],
  exports: [UserService],
})
export class UserModule {}
