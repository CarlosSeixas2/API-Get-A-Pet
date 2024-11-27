import bcrypt from 'bcrypt'

import AppError from '@errors/app-error'

import UserRepository from 'repositories/user-repository'

import getToken from '@utils/get-token'

import { Request } from 'express'

interface IUserUpdated {
  [key: string]: string | number
}

export default class UpdateService {
  static async execute(req: Request) {
    const { name, email, phone, password, image } = req.body
    const Keys = Object.keys(req.body)

    // const image = null

    const token = getToken(req)
    const user = await UserRepository.getUserByToken(token)

    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }

    if (!name && !email && !phone && !password && !image) {
      throw new AppError('Insira algo para atualizar')
    }

    const ObjectUserUpdated: IUserUpdated = {}

    for (const key of Keys) {
      if (key === 'email') {
        const emailExists = await UserRepository.findByEmail(email)

        if (emailExists && emailExists.id !== Number(user.id)) {
          throw new AppError('Email já cadastrado')
        } else if (emailExists && emailExists.id === Number(user.id)) {
          throw new AppError('Por favor, insira um email diferente')
        }

        ObjectUserUpdated[key] = email
      } else if (key === 'password') {
        const comparePassword = await bcrypt.compare(
          req.body[key],
          user.password,
        )

        if (comparePassword) {
          throw new AppError('Insira uma senha diferente da anterior')
        } else {
          const hash = await bcrypt.hash(req.body[key], 10)
          ObjectUserUpdated[key] = hash
        }
      } else {
        ObjectUserUpdated[key] = req.body[key]
      }
    }

    const userUpdated = await UserRepository.update(
      Number(user.id),
      ObjectUserUpdated,
    )

    return userUpdated
  }
}
