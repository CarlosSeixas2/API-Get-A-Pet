import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db/conn'

interface PetAttributes {
  id: number
  name: string
  age: number
  description: string
  weight: number
  color: string
  images: string
  available: boolean
  user: number
  adopter: number
}

interface PetCreationAttributes
  extends Optional<
    PetAttributes,
    'id' | 'description' | 'available' | 'user' | 'adopter'
  > {}

class Pet
  extends Model<PetAttributes, PetCreationAttributes>
  implements PetAttributes
{
  public id!: number
  public name!: string
  public age!: number
  public description!: string
  public weight!: number
  public color!: string
  public images!: string
  public available!: boolean
  public user!: number
  public adopter!: number
}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(255),
    },
    age: {
      type: new DataTypes.INTEGER(),
    },
    description: {
      type: new DataTypes.STRING(255),
    },
    weight: {
      type: new DataTypes.INTEGER(),
    },
    color: {
      type: new DataTypes.STRING(255),
    },
    images: {
      type: new DataTypes.STRING(255),
    },
    available: {
      type: new DataTypes.BOOLEAN(),
    },
    user: {
      type: new DataTypes.INTEGER(),
    },
    adopter: {
      type: new DataTypes.INTEGER(),
    },
  },
  {
    sequelize,
    tableName: 'pets',
  },
)

export default Pet
