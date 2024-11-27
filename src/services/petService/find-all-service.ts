import PetRepository from 'repositories/pet-repository'

export default class FindAllService {
  static async execute() {
    const pets = await PetRepository.getAll()

    return pets
  }
}
