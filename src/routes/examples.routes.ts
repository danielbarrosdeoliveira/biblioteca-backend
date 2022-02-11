import { Router } from 'express'
import { CreateExampleController } from '../controllers/CreateExampleController'

const examplesRoutes = Router()

const createExampleController = new CreateExampleController()

examplesRoutes.post('/examples', createExampleController.store)

export { examplesRoutes }
