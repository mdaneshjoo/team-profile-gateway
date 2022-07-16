import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async create() {
    const result = await this.userService.create();
    return {
      success: 'true',
      result,
    };
  }
}
