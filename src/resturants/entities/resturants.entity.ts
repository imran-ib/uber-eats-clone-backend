import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Resurants {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isVegan: boolean;

  @Field(() => String)
  Address: string;

  @Field(() => String)
  Owner: string;
}
