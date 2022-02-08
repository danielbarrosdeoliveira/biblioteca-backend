import { Router } from 'express'
import { CreateExampleController } from '../controllers/CreateExampleController'

const router = Router()

const createExampleController = new CreateExampleController()

router.post('/examples', createExampleController.store)

export { router }
