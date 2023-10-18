import { Injectable } from '@nestjs/common';
import { GroupsRepository } from './groups.repository';
import 'bson';

@Injectable()
export class GroupsService {
  constructor(private readonly groupsRepository: GroupsRepository) {}
  async getAllGroups() {
    return await this.groupsRepository.findAll();
  }
}
