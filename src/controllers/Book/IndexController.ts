import { Request, Response } from 'express'
import { IndexService } from '../../services/Book'

class IndexController {
  async index(request: Request, response: Response) {
    const createExampleService = new IndexService()

    const books = await createExampleService.execute()

    return response.json(books)
  }
}

export { IndexController }
