import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupDocument } from './groups.schema';
import { Model } from 'mongoose';

@Injectable()
export class GroupsRepository {
  constructor(
    @InjectModel(Group.name) private GroupModel: Model<GroupDocument>,
  ) {}

  async findAll() {
    return this.GroupModel.find({});
  }
}
