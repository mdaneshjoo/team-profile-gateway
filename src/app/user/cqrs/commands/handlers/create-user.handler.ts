import { CreateUserCommand } from '../impl/create-user.command';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { UserClient } from '../../../user.enum';
import { firstValueFrom } from 'rxjs';
import { messagePattern } from '../../cqrs.enum';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand>, OnModuleInit
{
  constructor(
    private eventBus: EventBus,
    @Inject(UserClient.NAME) private client: ClientKafka,
  ) {}

  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf(messagePattern.USER_ORGANIZATION_CREATE);
    await this.client.connect();
  }

  async execute(command: CreateUserCommand): Promise<any> {
    // return this.eventBus.publish(new UserCreatedEvent(messagePattern.USER_CREATE, command.userData))
    try {
      return await firstValueFrom(
        this.client.send(
          messagePattern.USER_ORGANIZATION_CREATE,
          command.userData,
        ),
      );
    } catch (e) {
      console.log('error---', e);
    }
  }
}
