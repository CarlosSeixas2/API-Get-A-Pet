import { Request } from 'express'

import PetRepository from 'repositories/pet-repository'

import AppError from '@errors/app-error'
import { z } from 'zod'

export default class DeleteService {
  static async execute(req: Request) {
    const deleteParamsSchema = z.object({
      id: z.number(),
    })

    deleteParamsSchema.parse(req.params)

    const { id } = req.params

    const pet = await PetRepository.findById(Number(id))

    if (!pet) {
      throw new AppError('Pet não encontrado', 404)
    }

    await PetRepository.delete(Number(id))

    return {
      message: 'Pet deletado com sucesso',
    }
  }
}
