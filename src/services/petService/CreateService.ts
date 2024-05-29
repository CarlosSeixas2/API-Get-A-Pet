import getToken from '@utils/getToken'
import { Request, Response } from 'express'

import UserRepository from '@repository/userRepository'
import AppError from '@errors/AppError'

export default class CreateService {
  static async execute(req: Request, res: Response) {
    const { name, age, weight, color } = req.body

    const available = true

    if (!name || !age || !weight || !color) {
      return res.status(400).json({ error: 'Campos faltando!' })
    }

    const token = getToken(req)

    const user = await UserRepository.findByToken(token)

    if (!user) {
      throw new AppError('Usuário não encontrado!', 404)
    }

    const pet = await PetRepository.create({
      name,
      age,
      weight,
      color,
      available,
      userId: user.id,
    })

    return pet
  }
}
