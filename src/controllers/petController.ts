import { Request, Response } from 'express'

import CreateService from '@services/petService/CreateService'

import AppError from '@errors/AppError'

export default class PetController {
  static async create(req: Request, res: Response) {
    try {
      const pet = await CreateService.execute(req, res)

      return res.status(201).json(pet)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ error: error.message })
      }
      return res.status(500).json({ error: 'Erro interno no servidor' })
    }
  }
}
