import PetRepository from '@repository/petRepository'

export default class FindAllService {
  static async execute() {
    const pets = await PetRepository.getAll()

    return pets
  }
}
