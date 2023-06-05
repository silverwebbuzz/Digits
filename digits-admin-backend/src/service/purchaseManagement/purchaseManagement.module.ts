import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseSchema } from '../../models/purchase.schema';
import { OrderSchema } from 'src/models/orderDetails.schema';
import { PurchaseManagementController } from 'src/controller/purchaseManagement.controller';
import { PurchaseManagementService } from 'src/service/purchaseManagement/purchaseManagement.service';
import { UserSchema } from 'src/models/user.schema';
import { PlateSchema } from 'src/models/plate.schema';
import { RefundSchema } from 'src/models/refund.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Purchase', schema: PurchaseSchema }]),
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Plate', schema: PlateSchema }]),
    MongooseModule.forFeature([{ name: 'Refund', schema: RefundSchema }]),
  ],
  providers: [PurchaseManagementService],
  controllers: [PurchaseManagementController],
  exports: [],
})
export class PurchaseModule {}
