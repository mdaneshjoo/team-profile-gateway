import { Injectable, Scope } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './cqrs/commands/impl/create-user.command';
import { User } from './interfaces';

@Injectable()
export class UserService {
  constructor(private commandBus: CommandBus) {}

  async create(): Promise<User> {
    return this.commandBus.execute(
      new CreateUserCommand({ email: 'test@test' }),
    );
  }
}
