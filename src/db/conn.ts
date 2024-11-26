import { Sequelize } from 'sequelize'

const dbUrl = 'postgresql://postgres:25369@localhost:5432/get_a_pet'

export const sequelize = new Sequelize(dbUrl, {
  define: {
    timestamps: true,
  },
})
