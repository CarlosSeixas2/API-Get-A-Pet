import { Request } from 'express'
import bcrypt from 'bcrypt'

import UserRepository from 'repositories/user-repository'

import AppError from '@errors/app-error'

import createUserToken from '@utils/create-user-token'

interface ResponseTokenUser {
  message: string
  token: string
}

export default class RegisterService {
  static async execute(req: Request): Promise<ResponseTokenUser> {
    const { name, email, phone, image, password, confirmPassword } = req.body

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
      image,
      password: hash,
    })

    // return userRegisted
    return createUserToken(userRegisted)
  }
}
