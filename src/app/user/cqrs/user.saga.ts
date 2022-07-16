import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ICommand, Saga } from '@nestjs/cqrs';
import { UserClient } from '../user.enum';
import { Observable } from 'rxjs';
import { messagePattern } from './cqrs.enum';

@Injectable()
export class UserSaga implements OnModuleInit {
  constructor(@Inject(UserClient.NAME) private client: ClientKafka) {}

  async onModuleInit(): Promise<void> {
    for (const key in messagePattern) {
      this.client.subscribeToResponseOf(messagePattern[key]);
    }
    await this.client.connect();
  }

  @Saga()
  userCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe
      // ofType(),
      // map<UserCreatedEvent,any>(event => {
      //     console.log(event)
      //    this.client.send(event.pattern, event.userData)
      // }),
      // catchError((err: object | string, caught) => {
      //     console.log('ob err', err)
      //     return caught
      // })
      ();
  };
}
