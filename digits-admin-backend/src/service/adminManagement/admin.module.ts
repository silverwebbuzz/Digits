import { Module } from '@nestjs/common';
import { UserService } from '../auth/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../models/user.schema';
import { AdminManagementController } from 'src/controller/adminManagement.controller';
import { AdminManagementService } from 'src/service/adminManagement/adminMangement.service';
// import { stateSchema } from 'src/models/state.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // MongooseModule.forFeature([{ name: 'state', schema: stateSchema }]),
  ],
  providers: [UserService, AdminManagementService],
  controllers: [AdminManagementController],
  exports: [UserService],
})
export class AdminModule {}
