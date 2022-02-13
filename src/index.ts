import express from 'express'

import { errorTratament } from './middlewares/errorTratament'
import { booksRoutes } from './routes'

const app = express()
app.use(express.json())

app.use(errorTratament)

app.use(booksRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log('Back-end started! 🚀')
})
