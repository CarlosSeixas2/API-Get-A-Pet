import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db/conn'

interface UserAttributes {
  id: number
  name: string
  phone: string
  email: string
  password: string
  image: string
}

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id' | 'phone' | 'image'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number
  public name!: string
  public phone!: string
  public email!: string
  public password!: string
  public image!: string
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
    },
    phone: {
      type: new DataTypes.STRING(255),
    },
    email: {
      type: new DataTypes.STRING(255),
    },
    password: {
      type: new DataTypes.STRING(255),
    },
    image: {
      type: new DataTypes.STRING(255),
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
)

export default User
