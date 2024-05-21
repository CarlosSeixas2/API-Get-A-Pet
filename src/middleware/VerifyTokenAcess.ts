import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import getToken from '../helpers/getToken'
import { env } from '../shared/env'

declare module 'express-serve-static-core' {
  interface Request {
    user?: unknown
  }
}

export const VerifyTokenAcess = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.authorization) {
    return res.json({ message: 'Acesso Bloqueado' })
  }

  const token = getToken(req)

  if (!token) {
    return res.json({ message: 'Acesso Bloqueado' })
  }

  try {
    const verified = jwt.verify(token, env.JWT_SECRET)
    req.user = verified

    return next()
  } catch (error) {
    return res.json({ message: 'Token inválido' })
  }
}
