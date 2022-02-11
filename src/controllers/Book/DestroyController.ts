import { Request, Response } from 'express'
import { DestroyService } from '../../services/Book'

class DestroyController {
  async destroy(request: Request, response: Response) {
    const destroyService = new DestroyService()

    const { id } = request.params

    const result = await destroyService.execute({ id })

    console.log(result)

    return response.status(200).send()
  }
}

export { DestroyController }
