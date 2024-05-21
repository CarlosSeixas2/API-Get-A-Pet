import user from '../models/user'

interface IUserRegisterInterface {
  name: string
  phone: string
  email: string
  password: string
  avatar: string
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
}
