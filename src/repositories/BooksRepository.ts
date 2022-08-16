import { EntityRepository, Repository } from 'typeorm'
import { Book } from '../models/Book'

@EntityRepository(Book)
class BooksRepository extends Repository<Book> {}

export { BooksRepository }
