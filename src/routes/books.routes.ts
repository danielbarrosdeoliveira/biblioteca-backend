import { Router } from 'express'
import {
  IndexController,
  DestroyController,
  StoreController,
  UpdateController,
  ShowController
} from '../controllers/Book'

const booksRoutes = Router()

const indexController = new IndexController()
const destroyController = new DestroyController()
const storeController = new StoreController()
const updateController = new UpdateController()
const showController = new ShowController()

booksRoutes.get('/books', indexController.index)
booksRoutes.delete('/books/:id', destroyController.destroy)
booksRoutes.post('/books', storeController.store)
booksRoutes.put('/books/:id', updateController.update)
booksRoutes.get('/books/:id', showController.show)

export { booksRoutes }
