import { Request, Response } from 'express'

import AppError from '@errors/AppError'

import RegisterService from '@services/userService/RegisterService'
import LoginService from '@services/userService/LoginService'
import checkUserService from '@services/userService/CheckUserService'
import GetUserByIdService from '@services/userService/GetUserByIdService'
import UpdateUserService from '@services/userService/UpdateService'

export default class UserController {
  static async register(req: Request, res: Response): Promise<Response> {
    try {
      const user = await RegisterService.execute(req)

      return res.json(user)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      } else {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
      }
    }
  }

  static async login(req: Request, res: Response): Promise<Response> {
    try {
      const user = await LoginService.execute(req)

      return res.json(user)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      } else {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
      }
    }
  }

  static async checkUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await checkUserService.execute(req)

      return res.json(user)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      } else {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
      }
    }
  }

  static async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await GetUserByIdService.execute(req)

      return res.json(user)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      } else {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
      }
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UpdateUserService.execute(req)

      return res.json(user)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      } else {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
      }
    }
  }
}
