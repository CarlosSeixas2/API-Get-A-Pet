import PetRepository from '@repository/pet-repository'

export default class FindAllService {
  static async execute() {
    const pets = await PetRepository.getAll()

    return pets
  }
}
