import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { ResturantsModule } from './resturants/resturants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      // if true we can access config module every where(config is globally available)
      isGlobal: true,
      // envFilePath: ['.env', '.env.dev', '.env.test'],
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').required(),
      }),
    }),
    ResturantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
