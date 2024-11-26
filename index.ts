import cors from 'cors'
import express from 'express'

import 'module-alias/register'

import Mainroutes from './src/routes/main.routes'

import { sync } from './src/shared/sync'
import { env } from './src/shared/env'

const app = express()

const PORT = env.PORT || 5000
// const PORT = process.env.PORT || 5000

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use(express.static('public'))

app.use(express.json())

app.use(Mainroutes)

// console.log(env.JWT_SECRET)
// console.log(process.env.JWT_SECRET)

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
