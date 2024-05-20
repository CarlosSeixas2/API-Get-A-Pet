import jwt, { Secret } from 'jsonwebtoken'

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
  )

  return {
    message: 'Usuário Logado com Sucesso!',
    token,
  }
}

export default createUserToken
