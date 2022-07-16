import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateOrganizationInput {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  organizationName: string;

  //TODO create custom validator for password
  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  /**
   * send country code +1
   * */
  @Field()
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber?: string;
}
