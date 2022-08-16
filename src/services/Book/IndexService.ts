import prismaClient from '../../prisma'

class IndexService {
  async execute() {
    const books = await prismaClient.book.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })

    return books
  }
}

export { IndexService }
