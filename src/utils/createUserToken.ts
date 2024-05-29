import jwt, { Secret } from 'jsonwebtoken'
import { env } from '@shared/env'

interface IUser {
  id: number
  name: string
  phone: string
  email: string
  avatar: string
  password: string
}

const createUserToken = async (user: IUser) => {
  const secretOrPrivateKey: Secret = process.env.JWT_SECRET as string

  const token = jwt.sign(
    {
      name: user.name,
      id: user.id,
    },
    secretOrPrivateKey,
    {
      expiresIn: env.expiresIn,
    },
  )

  return {
    message: 'Usuário Logado com Sucesso!',
    token,
  }
}

export default createUserToken
