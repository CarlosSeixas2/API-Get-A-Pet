import getToken from '@utils/get-token'
import { Request } from 'express'

import AppError from '@errors/app-error'
import UserRepository from 'repositories/user-repository'
import PetRepository from 'repositories/pet-repository'
import { z } from 'zod'

export default class CreateService {
  static async execute(req: Request) {
    const createBodySchema = z.object({
      name: z.string(),
      age: z.number(),
      description: z.string(),
      weight: z.number(),
      color: z.string(),
    })

    createBodySchema.parse(req.body)

    const { name, age, description, weight, color } = req.body

    const images = ''
    const available = true

    const token = getToken(req)

    const user = await UserRepository.getUserByToken(token)

    if (!user) {
      throw new AppError('Usuário não encontrado!', 404)
    }

    const pet = await PetRepository.create({
      name,
      age,
      description,
      weight,
      color,
      images,
      user: user.id,
      available,
    })

    return pet
  }
}
