import prismaClient from '../../prisma'

interface IBookRequest {
  id: string
}

class UpdateService {
  async execute({ id }: IBookRequest, data) {
    const book = await prismaClient.book.findFirst({
      where: {
        id
      }
    })

    if (!book) {
      throw new Error('book not found!')
    }

    try {
      const result = await prismaClient.book.update({
        where: { id },
        data: {
          ...data
        }
      })

      return result
    } catch (error) {
      return error
    }
  }
}

export { UpdateService }
