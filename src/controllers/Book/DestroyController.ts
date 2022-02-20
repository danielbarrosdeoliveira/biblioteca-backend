import { Request, Response } from 'express'
import { DestroyService } from '../../services/Book'

class DestroyController {
  async destroy(request: Request, response: Response) {
    const { id } = request.params

    const destroyService = new DestroyService()

    try {
      const result = await destroyService.execute({ id })
      return response.status(200).json({ result })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { DestroyController }
