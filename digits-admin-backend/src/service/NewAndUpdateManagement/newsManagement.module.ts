import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsScheema } from '../../models/news.schema';
import { NewsManagementController } from 'src/controller/newsManagement.controller';
import { NewsManagementservice } from 'src/service/NewAndUpdateManagement/newsManagement.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'News', schema: NewsScheema }])],
  providers: [NewsManagementservice],
  controllers: [NewsManagementController],
  exports: [],
})
export class NewsModule {}
