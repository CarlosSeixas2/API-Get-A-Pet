import express from 'express'
import UserController from '../controllers/UserController'

const Userrouter = express.Router()

Userrouter.post('/register', UserController.register)
Userrouter.post('/login', UserController.login)

export default Userrouter
