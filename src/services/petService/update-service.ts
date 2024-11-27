import { Request } from 'express'

import AppError from '@errors/app-error'
import PetRepository from 'repositories/pet-repository'

export default class UpdateService {
  static async execute(req: Request) {
    const { id } = req.params
    const { age, description, weight, color, images, user, available } =
      req.body

    if (!age || !description || !weight || !color || !images || !user) {
      throw new AppError('Campos obrigatórios não preenchidos', 400)
    }

    return await PetRepository.update({
      id: Number(id),
      age,
      description,
      weight,
      color,
      images,
      user,
      available,
    })
  }
}
