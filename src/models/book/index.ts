import { IsEnum, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

import { BooksTable, BookCurrencyEnum } from '@/database';

export type IBookSelect = InferSelectModel<typeof BooksTable>;
export type IBookInsert = InferInsertModel<typeof BooksTable>;

export class Book implements IBookSelect {
  @IsNotEmpty()
  publisher: string;
  @IsNotEmpty()
  year: number;
  @IsNotEmpty()
  writtenBy: string;
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  currency: BookCurrencyEnum;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  category: string;
}

export class BookCreateDTO implements IBookInsert {
  @IsNotEmpty()
  publisher: string;
  @IsNotEmpty()
  year: number;
  @IsNotEmpty()
  writtenBy: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  @IsEnum(BookCurrencyEnum)
  currency: BookCurrencyEnum;
}

export class BookUpdateDTO extends PartialType(BookCreateDTO) {}
