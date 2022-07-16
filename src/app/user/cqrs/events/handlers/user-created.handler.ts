import { UserCreatedEvent } from '../impl/user-created.event';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  handle(_event: UserCreatedEvent) {
    // logic
  }
}
