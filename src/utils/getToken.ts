import { Request } from 'express'

import AppError from '../errors/AppError'

const getToken = (req: Request): string => {
  const authHeader = req.headers.authorization

  if (!authHeader) throw new AppError('Token not provided')

  const token = authHeader.split(' ')[1]

  if (!token) throw new AppError('Token not provided')

  return token
}

export default getToken
