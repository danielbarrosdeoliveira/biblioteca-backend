import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  response.json({ hello: 'world!' })
})

export * from './books.routes'

export { router }
