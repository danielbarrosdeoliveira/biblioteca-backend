import prismaClient from '../../prisma'

interface IBookRequest {
  id: string
}

class ShowService {
  async execute({ id }: IBookRequest) {
    const book = await prismaClient.book.findFirst({
      where: {
        id
      }
    })

    if (!book) {
      throw new Error('book not found!')
    }

    return book
  }
}

export { ShowService }
