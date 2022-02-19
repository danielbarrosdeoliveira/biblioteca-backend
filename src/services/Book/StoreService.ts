import { Book } from '@prisma/client'
import prismaClient from '../../prisma'

class StoreService {
  async execute(book: Book) {
    const books = await prismaClient.book.create({
      data: {
        ...book
      }
    })

    return books
  }
}

export { StoreService }
