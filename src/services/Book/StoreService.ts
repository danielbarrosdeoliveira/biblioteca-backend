import prismaClient from '../../prisma'

class StoreService {
  async execute(book) {
    const books = await prismaClient.book.create({
      data: {
        ...book
      }
    })

    return books
  }
}

export { StoreService }
