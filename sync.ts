import { sequelize } from './src/db/conn'
import user from './src/models/user'

export async function sync() {
  try {
    await sequelize.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso.')

    await user.sync({ force: true })
    await sequelize.sync({ alter: true })
    console.log('Modelos sincronizados com o banco de dados.')
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error)
  }
}
