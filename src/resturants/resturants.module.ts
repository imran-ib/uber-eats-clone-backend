import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RestauratsResolver } from './resturants-resolvers';

@Module({
  providers: [RestauratsResolver, PrismaService],
})
export class ResturantsModule {}
