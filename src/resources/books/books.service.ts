import { Injectable, Res } from '@nestjs/common';

import { db, BooksTable } from '@/database';
import { BookCreateDTO, BookUpdateDTO } from '@/models';

@Injectable()
export class BooksService {
  async create(createBookDto: BookCreateDTO) {
    await db.insert(BooksTable).values({
      ...createBookDto,
    });

    return createBookDto;
  }

  async findAll() {
    const response = await db.select().from(BooksTable);

    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: BookUpdateDTO) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
