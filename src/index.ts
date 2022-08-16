import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'

import { errorTratament } from './middlewares/errorTratament'
import { booksRoutes, examplesRoutes } from './routes'

import './database'

const app = express()
app.use(express.json())

app.use(booksRoutes)
app.use(examplesRoutes)

app.use(errorTratament)

app.listen(process.env.PORT || 3333, () => {
  console.log('Back-end started! 🚀🚀')
})
