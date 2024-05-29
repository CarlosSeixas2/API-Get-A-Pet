import { Request } from 'express'

import UserRepository from '@repository/userRepository'
import PetRepository from '@repository/petRepository'

import getToken from '@utils/getToken'

import AppError from '@errors/AppError'

export default class FindPetsByUserService {
  static async execute(req: Request) {
    const token = getToken(req)

    const user = await UserRepository.findByToken(token)

    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }

    const pets = await PetRepository.findPetByUserId(user.id)

    return pets
  }
}
