import { Controller, Get } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('group')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get('all')
  all() {
    console.log('request');
    return this.groupsService.getAllGroups();
  }
}
