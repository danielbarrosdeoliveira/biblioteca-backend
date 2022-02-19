import { Router } from 'express'
import {
  IndexController,
  DestroyController,
  StoreController
} from '../controllers/Book'

const booksRoutes = Router()

const indexController = new IndexController()
const destroyController = new DestroyController()
const storeController = new StoreController()

booksRoutes.get('/books', indexController.index)
booksRoutes.delete('/books/:id', destroyController.destroy)
booksRoutes.post('/books', storeController.store)

export { booksRoutes }
