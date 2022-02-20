import { Router } from 'express'
import {
  IndexController,
  DestroyController,
  StoreController,
  UpdateController
} from '../controllers/Book'

const booksRoutes = Router()

const indexController = new IndexController()
const destroyController = new DestroyController()
const storeController = new StoreController()
const updateController = new UpdateController()

booksRoutes.get('/books', indexController.index)
booksRoutes.delete('/books/:id', destroyController.destroy)
booksRoutes.post('/books', storeController.store)
booksRoutes.put('/books/:id', updateController.update)

export { booksRoutes }
