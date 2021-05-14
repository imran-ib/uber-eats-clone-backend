import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@ArgsType()
export class CreateInputFieldDto {
  @IsString()
  @Field(() => String)
  name: string;

  @IsBoolean()
  @Field(() => Boolean)
  isVegan: boolean;

  @IsString()
  @Field(() => String)
  Address: string;

  @IsString()
  @Field(() => String)
  Owner: string;
}
