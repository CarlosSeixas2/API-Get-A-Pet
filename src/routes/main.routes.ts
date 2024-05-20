import express from 'express'

import Userrouter from './user.routes'

const Mainroutes = express()

Mainroutes.use('/user', Userrouter)

export default Mainroutes
