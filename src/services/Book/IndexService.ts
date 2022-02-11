import { getCustomRepository } from 'typeorm'
import { BooksRepository } from '../../repositories/BooksRepository'

class IndexService {
  async execute() {
    const booksRepositories = getCustomRepository(BooksRepository)

    const books = await booksRepositories.find()

    return books
  }
}

export { IndexService }
