import 'dotenv/config';

import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BooksController, BooksModule, BooksService } from './resources';

@Module({
  imports: [BooksModule],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
