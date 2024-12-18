import Pet from '@models/pet'

interface IPetCreateInterface {
  name: string
  age: number
  description?: string
  weight: number
  color: string
  images?: string
  available?: boolean
  user?: number
  adopter?: number
}

export default class PetRepository {
  static async create(data: IPetCreateInterface) {
    const query = await Pet.create(data)

    return query
  }

  static async delete(id: number) {
    const query = await Pet.destroy({
      where: { id },
    })

    return query
  }

  static async update(data: Partial<IPetCreateInterface> & { id: number }) {
    console.log(data)
  }

  static async getAll() {
    const query = await Pet.findAll()

    return query
  }

  static async findById(id: number) {
    const query = await Pet.findByPk(id)

    return query
  }

  static async findPetByUserId(user: number) {
    const query = await Pet.findAll({
      where: { user },
    })

    return query
  }

  static async findAdopted() {
    const query = await Pet.findAll({
      where: { available: true },
    })

    return query
  }
}
