import { response } from 'express'
import prismaClient from '../../prisma'

interface IBookRequest {
  id: string
}

class DestroyService {
  async execute({ id }: IBookRequest) {
    const book = await prismaClient.book.findFirst({
      where: {
        id
      }
    })

    if (!book) {
      throw new Error('book not found!')
    }

    try {
      await prismaClient.book.delete({
        where: {
          id
        }
      })
    } catch (error) {
      return error
    }
  }
}

export { DestroyService }
