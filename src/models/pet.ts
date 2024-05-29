import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db/conn'

interface PetAttributes {
  id: number
  age: number
  description: string
  weight: number
  color: string
  images: string
  userId: number
  adopted: boolean
}

interface PetCreationAttributes extends Optional<PetAttributes, 'id'> {}

class Pet
  extends Model<PetAttributes, PetCreationAttributes>
  implements PetAttributes
{
  public id!: number
  public age!: number
  public description!: string
  public weight!: number
  public color!: string
  public images!: string
  public userId!: number
  public adopted!: boolean
}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    age: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    weight: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    color: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    images: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    userId: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    adopted: {
      type: new DataTypes.BOOLEAN(),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pets',
  },
)

export default Pet
