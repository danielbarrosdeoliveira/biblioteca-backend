import { Request, Response } from 'express'
import { StoreService } from '../../services/Book'

class StoreController {
  async store(request: Request, response: Response) {
    const data = request.body

    const storeService = new StoreService()

    try {
      const book = await storeService.execute(data)
      return response.status(200).json({ book })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { StoreController }
