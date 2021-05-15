import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const Port = process.env.PORT || 1234;
  await app.listen(Port);
  console.log(process.env.TEST);
}
bootstrap();
