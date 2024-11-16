import { Reflector, NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { ResponseMappingInterceptor } from '@/interceptors';

import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseMappingInterceptor(new Reflector()));

  await app.listen(process.env.PORT ?? 3000);
};

bootstrap();
