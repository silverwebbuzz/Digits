import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { stateSchema } from 'src/models/state.schema';
import { stateController } from 'src/controller/state.controller';
import { stateManagement } from './stateManagement';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'state', schema: stateSchema }]),
  ],
  providers: [stateManagement],
  controllers: [stateController],
  exports: [],
})
export class stateModule {}
