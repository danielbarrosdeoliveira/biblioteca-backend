import { Request, Response, Router } from 'express'

export * from './books.routes'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  response.json({ hello: 'world!' })
})
