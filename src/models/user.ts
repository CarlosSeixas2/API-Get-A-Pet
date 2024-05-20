import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db/conn'

interface UserAttributes {
  id: number
  name: string
  phone: string
  email: string
  password: string
  avatar: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number
  public name!: string
  public phone!: string
  public email!: string
  public password!: string
  public avatar!: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    avatar: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
)

export default User

// import { sequelize } from '../db/conn'
// import { DataTypes } from 'sequelize'

// const user = sequelize.define('users', {
//   name: {
//     type: DataTypes.STRING,
//   },
//   email: {
//     type: DataTypes.STRING,
//   },
//   phone: {
//     type: DataTypes.STRING,
//   },
//   password: {
//     type: DataTypes.STRING,
//   },
//   avatar: {
//     type: DataTypes.STRING,
//   },
// })

// export default user
