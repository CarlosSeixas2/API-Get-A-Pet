import { Request } from 'express'

import bcrypt from 'bcrypt'

import AppError from '../../errors/AppError'
import UserRepository from '../../repository/userRepository'
import createUserToken from '../../helpers/createUserToken'

interface ResponseTokenUser {
  message: string
  token: string
}

export default class LoginService {
  static async execute(req: Request): Promise<ResponseTokenUser> {
    const { email, password } = req.body

    if (!email || !password) {
      throw new AppError('Preencha todos os campos')
    }

    const emailExist = await UserRepository.findByEmail(email)

    if (!emailExist) {
      throw new AppError('Email não cadastrado')
    }

    const checkpassword = await bcrypt.compare(password, emailExist.password)

    if (!checkpassword) {
      throw new AppError('Senha incorreta')
    }

    return createUserToken(emailExist)
  }
}
