import { User } from '../../../interfaces';

export class UserCreatedEvent {
  constructor(
    public readonly pattern: string,
    public readonly userData: User,
  ) {}
}
