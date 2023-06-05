import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AdminModule } from './service/adminManagement/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './service/userManagement/user.module';
import { AuthModule } from './service/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PlateModule } from './service/plateManagement/plate.module';
import { SendGridService } from './sendgrid/sendgrid.service';
import { MailController } from './mail/mail.controller';
import { DashboardModule } from './service/dashboardManagement/dashboard.module';
import { NewsModule } from './service/NewAndUpdateManagement/newsManagement.module';
import { MailService } from './mail/mail.service';
import { PurchaseModule } from 'src/service/purchaseManagement/purchaseManagement.module';
import { stateModule } from './service/stateManagement/state.module';
import { AddPlateScriptService } from './service/addPlateScript.service';
import { PlateSchema } from './models/plate.schema';
import { testPlateSchema } from './models/testPlate.schema';
import { adminPlateSchema } from './models/adminPlates.schema';
import { sellPlateSchema } from './models/sellPlate.schema';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      { name: 'Plate', schema: PlateSchema },
      { name: 'testPlate', schema: testPlateSchema },
      { name: 'adminPlate', schema: adminPlateSchema },
      { name: 'sellPlate', schema: sellPlateSchema },
    ]),
    UserModule,
    AuthModule,
    AdminModule,
    PlateModule,
    DashboardModule,
    PurchaseModule,
    NewsModule,
    stateModule,
  ],
  controllers: [AppController, MailController],
  providers: [AppService, SendGridService, MailService, AddPlateScriptService],
})
export class AppModule {}
