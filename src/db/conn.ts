import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '25369',
  database: 'get_a_pet',
  define: {
    timestamps: true,
  },
});
