import { sequelize } from '../db/conn'
import { env } from './env'

import User from '@models/user'
import Pet from '@models/pet'

export async function sync() {
  try {
    await sequelize.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso.')

    if (env.SYNC) {
      await User.sync({ force: true })
      await Pet.sync({ force: true })
      await sequelize.sync({ alter: true })
    }

    console.log('Modelos sincronizados com o banco de dados.')
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error)
  }
}
