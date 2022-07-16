import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'response for mutations' })
export class BaseMutationModel {
  @Field({ description: 'status of operation' })
  status: 'SUCCESS' | 'FAIL';

  @Field({ description: 'fail reason or success message' })
  message: string;
}
