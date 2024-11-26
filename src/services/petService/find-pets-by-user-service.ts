import { Request } from 'express'

import UserRepository from '@repository/user-repository'
import PetRepository from '@repository/pet-repository'

import getToken from '@utils/get-token'

import AppError from '@errors/app-error'

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
