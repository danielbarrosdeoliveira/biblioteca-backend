import prismaClient from '../../prisma'

class IndexService {
  async execute() {
    const books = await prismaClient.book.findMany()

    return books
  }
}

export { IndexService }
