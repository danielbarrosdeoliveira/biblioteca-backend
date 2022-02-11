import { Router } from 'express'
import { IndexController } from '../controllers/Book'

const booksRoutes = Router()

const indexController = new IndexController()

booksRoutes.get('/books', indexController.index)

export { booksRoutes }
