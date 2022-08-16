import { Request, Response } from 'express'
import { StoreService } from '../../services/Book'

class StoreController {
  async store(request: Request, response: Response) {
    const book = request.body

    const storeService = new StoreService()

    try {
      const result = await storeService.execute(book)
      return response.status(200).json({ result })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { StoreController }
