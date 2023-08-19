import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { InternalServerErrorException, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  if (!port) {
    throw new InternalServerErrorException('Error to load environments');
  }
  await app.listen(port);
  const logger = new Logger('Bootstrap');
  logger.log(`Application is running on port ${port}`);
}

bootstrap();
