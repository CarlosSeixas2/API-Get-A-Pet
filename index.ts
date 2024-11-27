// import 'module-alias/register'
import cors from 'cors'
import express, { Request, Response } from 'express'

import Mainroutes from './src/routes/main.routes'

import { sync } from './src/shared/sync'
import { env } from './src/shared/env'

import { z } from 'zod'
import AppError from '@errors/app-error'

const app = express()

const PORT = env.PORT

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use(express.static('public'))

app.use(express.json())

app.use(Mainroutes)

app.use((err: Error, _req: Request, res: Response) => {
  console.error(err)

  if (err instanceof AppError)
    return res.status(err.statusCode).json({ error: err.message })

  if (err instanceof z.ZodError)
    return res.status(400).json({ error: err.errors })

  return res
    .status(500)
    .json({ error: 'Algo deu errado, tente novamente mais tarde.' })
})

async function startServer() {
  try {
    await sync()
    app.listen(PORT, () => {
      console.log(`Servidor está ouvindo na porta ${PORT}`)
    })
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error)
  }
}

startServer()
