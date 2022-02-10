import { EntityRepository, Repository } from 'typeorm'
import { Book } from '../models/Book'

@EntityRepository(Book)
class BooksRepositories extends Repository<Book> {}

export { BooksRepositories }
