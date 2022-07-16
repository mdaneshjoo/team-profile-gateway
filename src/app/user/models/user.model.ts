import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User Schema . Get User Date' })
export class User {
  @Field((type) => Int, { description: 'id of user' })
  id: number;

  @Field({ nullable: true, description: 'Name of User' })
  firstName?: string;

  @Field({ nullable: true, description: 'last name of user' })
  lastName?: string;

  @Field({ nullable: false, description: 'user email' })
  email: string;
}
