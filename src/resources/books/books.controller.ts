import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  HttpStatus,
  HttpException,
  Res,
} from '@nestjs/common';

import { ResponseMessage } from '@/decorators';
import { BookCreateDTO, BookUpdateDTO } from '@/models';

import { BooksService } from './books.service';

const resources = 'books';

@Controller(resources)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() bookCreateDTO: BookCreateDTO) {
    return this.booksService.create(bookCreateDTO);
  }

  @Get()
  @ResponseMessage(`Success get ${resources}`)
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const result = await this.booksService.findOne(+id);

    if (!result?.id) {
      throw new HttpException('', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() bookUpdateDTO: BookUpdateDTO) {
    return this.booksService.update(+id, bookUpdateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
