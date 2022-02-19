import prismaClient from '../../prisma'

class IndexService {
  async execute() {
    const books = await prismaClient.book.findMany({
      orderBy: {
        created_at: 'asc'
      }
    })

    return books
  }
}

export { IndexService }
