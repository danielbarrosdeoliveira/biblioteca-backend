import { Request, Response } from 'express'
import { ShowService } from '../../services/Book'

class ShowController {
  async show(request: Request, response: Response) {
    const { id } = request.params

    const showService = new ShowService()

    try {
      const result = await showService.execute({ id })
      return response.status(200).json({ result })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ShowController }
