import { Router } from 'express'
import { CreateExampleController } from '../controllers/CreateExampleController'
import { IndexController } from '../controllers/Book'

const router = Router()

const createExampleController = new CreateExampleController()
const indexController = new IndexController()

router.post('/examples', createExampleController.store)

router.get('/books', indexController.index)

export { router }
