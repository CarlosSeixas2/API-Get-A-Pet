import dotenv from 'dotenv'

import cors from 'cors'
import express from 'express'

import Mainroutes from './src/routes/main.routes'

import { sync } from './sync'
dotenv.config()

const app = express()

const PORT = 5000 || process.env.PORT

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use(express.static('public'))

app.use(express.json())

app.use(Mainroutes)

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
