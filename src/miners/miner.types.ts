import { Field, Int, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class MinerType {
  @Field()
  id: string;

  @Field()
  ip: string;
  @Field()
  sn: string;

  @Field({ nullable: true })
  hashrate?: number;
}

@InputType()
export class MinerInputType {
  @Field()
  ip: string;
  @Field()
  sn: string;
  @Field()
  hashrate?: number;
}
