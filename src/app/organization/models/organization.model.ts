import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Organization Schema' })
export class Organization {
  @Field((type) => Int, {
    nullable: false,
    description: 'id of the organization',
  })
  id: number;

  @Field({ nullable: false, description: 'email for organization' })
  email: string;

  @Field({ nullable: false, description: 'password for organization' })
  password: string;

  @Field({ nullable: false, description: 'Name of the organization' })
  organizationName: string;

  @Field({ nullable: true, description: 'Phone number' })
  phoneNumber: string;
}
