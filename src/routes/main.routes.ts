import express from 'express'

import Userrouter from '@routes/user.routes'
import Petrouter from '@routes/pets.routes'

const Mainroutes = express()

Mainroutes.use('/user', Userrouter)
Mainroutes.use('/pet', Petrouter)

export default Mainroutes
