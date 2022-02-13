import prismaClient from '../../prisma'

class IndexService {
  async execute() {
    const books = await prismaClient.book.findMany({
      orderBy: {
        title: 'desc'
      }
    })

    return books
  }
}

export { IndexService }
