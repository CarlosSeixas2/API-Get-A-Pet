import express from 'express'
import UserController from '@controllers/UserController'

import VerifyTokenAcess from '@middlewares/VerifyTokenAcess'

const Userrouter = express.Router()

Userrouter.post('/register', UserController.register)
Userrouter.post('/login', UserController.login)
Userrouter.get('/checkUser', VerifyTokenAcess, UserController.checkUser)
Userrouter.get('/:id', VerifyTokenAcess, UserController.getUserById)

export default Userrouter
