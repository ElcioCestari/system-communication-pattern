import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  if (!port) {
    throw new InternalServerErrorException('Error to load environments');
  }
  app.connectMicroservice({
    name: 'USER',
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, 'grpc/proto/user.proto'),
    },
  });
  await app.startAllMicroservices();
  await app.listen(port);
  const logger = new Logger('Bootstrap');
  logger.log(`Application is running on port ${port}`);
}

bootstrap();
