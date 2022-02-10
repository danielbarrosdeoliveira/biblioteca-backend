import { getCustomRepository } from 'typeorm'
import { BooksRepositories } from '../../repositories/BooksRepositories'

class IndexService {
  async execute() {
    const booksRepositories = getCustomRepository(BooksRepositories)

    const books = await booksRepositories.find()

    return books
  }
}

export { IndexService }
