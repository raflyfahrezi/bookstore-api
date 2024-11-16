import { Injectable } from '@nestjs/common';

import { db, BooksTable } from '@/database';
import { BookCreateDTO, BookUpdateDTO } from '@/models';
import { eq } from 'drizzle-orm';

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

  async findOne(id: number) {
    const response = await db
      .select()
      .from(BooksTable)
      .where(eq(BooksTable.id, id));

    return response[0] ?? {};
  }

  update(id: number, updateBookDto: BookUpdateDTO) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
