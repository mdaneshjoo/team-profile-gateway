import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserCqrsModule } from './cqrs/cqrs.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [UserCqrsModule],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
