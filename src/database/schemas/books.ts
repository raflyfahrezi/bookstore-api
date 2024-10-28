import { integer, pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core';

import { enumToPgEnum } from '@/utils';

export enum BookCurrencyEnum {
  USD = 'USD',
  IDR = 'IDR',
}

export const BooksCurrencyEnumTable = pgEnum(
  'currency',
  enumToPgEnum(BookCurrencyEnum),
);

export const BooksTable = pgTable('books', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  quantity: integer().notNull(),
  category: varchar().notNull(),
  currency: BooksCurrencyEnumTable().notNull(),
});
