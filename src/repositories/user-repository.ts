import jwt from 'jsonwebtoken'

import user from '@models/user'

import { env } from '@shared/env'

interface IUserRegisterInterface {
  name: string
  phone?: string
  email: string
  password: string
  image?: string
}

interface IUserToken {
  id: number
}

export default class UserRepository {
  static async register(data: IUserRegisterInterface) {
    const query = await user.create(data)

    return query
  }

  static async findByEmail(email: string) {
    const query = await user.findOne({ where: { email } })

    return query
  }

  static async findById(id: number) {
    const query = await user.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    })

    return query
  }

  static async update(id: number, data: Partial<IUserRegisterInterface>) {
    await user.update(data, { where: { id } })

    const query = await this.findById(id)

    return query
  }

  static async getUserByToken(token: string) {
    const decoded = jwt.verify(token, env.JWT_SECRET) as IUserToken

    const query = await this.findById(decoded.id)

    return query
  }
}
