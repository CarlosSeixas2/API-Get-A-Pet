import { Request } from 'express'

import UserRepository from '@repository/userRepository'

import AppError from '@errors/AppError'

export default class GetUserByIdService {
  static async execute(req: Request) {
    const { id } = req.params

    const user = await UserRepository.findById(Number(id))

    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }

    return user
  }
}
