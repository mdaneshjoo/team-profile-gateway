import { Module } from '@nestjs/common';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { CqrsModule } from '@nestjs/cqrs';
import {
  ClientsModule,
  ClientsProviderAsyncOptions,
} from '@nestjs/microservices';
import { UserClient } from '../user.enum';
import { MicroServiceConfigModule } from '../../../config/microservice/config.module';
import { MicroServiceConfigService } from '../../../config/microservice/config.service';
import {
  KafkaClientProviderOptionsFactory,
  RegisterConfig,
} from '../../../factory';
import { UserCreatedEvent } from './events/impl/user-created.event';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { UserSaga } from './user.saga';

// eslint-disable-next-line new-cap
@Module({
  imports: [
    CqrsModule,
    ClientsModule.registerAsync([
      {
        name: UserClient.NAME,
        imports: [MicroServiceConfigModule],
        useFactory: (configService: MicroServiceConfigService) =>
          new RegisterConfig(
            new KafkaClientProviderOptionsFactory(
              configService,
              'user',
              'user-consumer',
            ),
          ).config,
        inject: [MicroServiceConfigService],
      } as ClientsProviderAsyncOptions,
    ]),
  ],
  providers: [...CommandHandlers, ...EventHandlers, UserSaga],
  exports: [CqrsModule],
})
export class UserCqrsModule {}
