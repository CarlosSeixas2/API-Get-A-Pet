import { Request } from 'express'

import UserRepository from '../../repository/userRepository'

import AppError from '../../errors/AppError'

import bcrypt from 'bcrypt'
import createUserToken from '../../helpers/createUserToken'

interface ResponseTokenUser {
  message: string
  token: string
}

export default class RegisterService {
  static async execute(req: Request): Promise<ResponseTokenUser> {
    const { name, email, phone, avatar, password, confirmPassword } = req.body

    if (!name || !email || !phone || !password || !confirmPassword) {
      throw new AppError('Preencha todos os campos')
    }

    if (password !== confirmPassword) {
      throw new AppError('Senhas não conferem')
    }

    const emailUsed = await UserRepository.findByEmail(email)

    if (emailUsed) {
      throw new AppError('Email já cadastrado, utilize outro email')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const userRegisted = await UserRepository.register({
      name,
      email,
      phone,
      avatar,
      password: hash,
    })

    // return userRegisted
    return createUserToken(userRegisted)
  }
}
