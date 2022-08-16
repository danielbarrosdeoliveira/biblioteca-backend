import { getCustomRepository } from 'typeorm'
import { BooksRepository } from '../../repositories'
import { validate } from 'uuid'

interface IBookRequest {
  id: string
}

class DestroyService {
  async execute({ id }: IBookRequest) {
    const booksRepository = getCustomRepository(BooksRepository)

    const isValidUuid = validate(id)

    if (!isValidUuid) {
      throw new Error('Please, send a valid ID')
    }

    const book = await booksRepository.find({ id })

    if (!book.length) {
      throw new Error('No books found with this ID!')
    }

    const result = await booksRepository.remove(book)

    return result
  }
}

export { DestroyService }
