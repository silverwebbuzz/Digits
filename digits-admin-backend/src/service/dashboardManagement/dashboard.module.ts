import { Module } from '@nestjs/common';
import { UserService } from '../auth/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../models/user.schema';
import { PlateSchema } from '../../models/plate.schema';
import { PurchaseSchema } from '../../models/purchase.schema';
import { DashboardManagementController } from 'src/controller/dashboardManagement.controller';
import { DashboardManagementService } from 'src/service/dashboardManagement/dashboardManagement.service';
//  import { DashboardplateManagementService } from 'src/Management/dashboardManagement/dashboardManagement.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Purchase', schema: PurchaseSchema }]),
    MongooseModule.forFeature([{ name: 'Plate', schema: PlateSchema }]),
  ],
  providers: [UserService, DashboardManagementService],
  controllers: [DashboardManagementController],
  exports: [UserService],
})
export class DashboardModule {}
