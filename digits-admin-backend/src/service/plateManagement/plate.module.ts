import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlateSchema } from '../../models/plate.schema';
import { PlateManagementController } from 'src/controller/plateManagement.controller';
import { PlateManagementService } from 'src/service/plateManagement/plateMangement.service';
import { stateSchema } from 'src/models/state.schema';
import { SendGridService } from 'src/sendgrid/sendgrid.service';
import { ConfigService } from '@nestjs/config';
import { UserSchema } from 'src/models/user.schema';
import { PurchaseSchema } from 'src/models/purchase.schema';
import { OrderSchema } from 'src/models/orderDetails.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Plate', schema: PlateSchema }]),
    MongooseModule.forFeature([{ name: 'state', schema: stateSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Purchase', schema: PurchaseSchema }]),
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  providers: [PlateManagementService, SendGridService, ConfigService],
  controllers: [PlateManagementController],
  exports: [],
})
export class PlateModule {}
