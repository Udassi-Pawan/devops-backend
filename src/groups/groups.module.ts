import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupsSchema } from './groups.schema';
import { GroupsController } from './groups.controller';
import { GroupsRepository } from './groups.repository';
import { GroupsService } from './groups.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupsSchema }]),
  ],
  controllers: [GroupsController],
  providers: [GroupsRepository, GroupsService],
  exports: [GroupsService, GroupsRepository],
})
export class GroupsModule {}
