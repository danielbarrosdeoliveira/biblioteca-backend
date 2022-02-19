import { Request, Response } from 'express'
import { StoreService } from '../../services/Book'

class StoreController {
  async store(request: Request, response: Response) {
    const book = request.body

    console.log(book)
    const storeService = new StoreService()

    const createdBook = await storeService.execute(book)

    return response.json(createdBook)
  }
}

export { StoreController }
