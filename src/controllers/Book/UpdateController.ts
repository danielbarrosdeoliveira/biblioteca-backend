import { Request, Response } from 'express'
import { UpdateService } from '../../services/Book'

class UpdateController {
  async update(request: Request, response: Response) {
    const { id } = request.params
    const data = request.body

    const updateService = new UpdateService()

    try {
      const result = await updateService.execute({ id }, data)
      return response.status(200).json({ result })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { UpdateController }
