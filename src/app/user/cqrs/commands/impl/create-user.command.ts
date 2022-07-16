import { User } from '../../../interfaces';

export class CreateUserCommand {
  constructor(public readonly userData: User) {}
}
