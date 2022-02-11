import { Router } from 'express'
import { IndexController, DestroyController } from '../controllers/Book'

const booksRoutes = Router()

const indexController = new IndexController()
const destroyController = new DestroyController()

booksRoutes.get('/books', indexController.index)
booksRoutes.delete('/books/:id', destroyController.destroy)

export { booksRoutes }
