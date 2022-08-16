import { Request, Response } from 'express'
import { IndexService } from '../../services/Book'

class IndexController {
  async index(request: Request, response: Response) {
    const indexService = new IndexService()

    const books = await indexService.execute()

    return response.json(books)
  }
}

export { IndexController }
