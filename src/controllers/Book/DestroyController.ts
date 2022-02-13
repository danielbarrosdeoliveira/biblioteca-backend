import { Request, Response } from 'express'
import { DestroyService } from '../../services/Book'

class DestroyController {
  async destroy(request: Request, response: Response) {
    const { id } = request.params

    const destroyService = new DestroyService()

    try {
      await destroyService.execute({ id })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { DestroyController }
