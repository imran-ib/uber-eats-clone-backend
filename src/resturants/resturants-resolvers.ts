import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { CreateInputFieldDto } from './Dtos/CreateResturant-dto';
import { Resurants } from './entities/resturants.entity';
import { Restaurant } from '@prisma/client';

@Resolver((_of) => Resurants)
export class RestauratsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Resurants])
  myRestaurants(@Args('veganOnly') veganOnly: boolean): Resurants[] {
    return [];
  }

  @Mutation(() => Boolean)
  async CreateRestaurant(
    @Args()
    CreateRestauratnInputDto: CreateInputFieldDto,
  ): Promise<boolean> {
    const { name, Address, Owner, isVegan } = CreateRestauratnInputDto;
    try {
      await this.prisma.restaurant.create({
        data: {
          address: Address,
          name,
          owner: Owner,
        },
      });
      return true;
    } catch (error) {
      new Error(`Something Went Wrong ${error.message}`);
      return false;
    }
  }
}
