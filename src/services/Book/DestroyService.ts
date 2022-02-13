import { validate } from 'uuid'
import prismaClient from '../../prisma'
interface IBookRequest {
  id: string
}

class DestroyService {
  async execute({ id }: IBookRequest) {
    const isValidUuid = validate(id)

    if (!isValidUuid) {
      throw new Error('Please, send a valid ID!')
    }

    const book = await prismaClient.book.findFirst({
      where: {
        id
      }
    })

    if (!book) {
      throw new Error('book not found!')
    }

    try {
      const result = await prismaClient.book.delete({
        where: {
          id
        }
      })

      return result
    } catch (error) {
      return error
    }
  }
}

export { DestroyService }
