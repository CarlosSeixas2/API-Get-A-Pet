import PetRepository from 'repositories/pet-repository'

export default class FindAdoptedService {
  static async execute() {
    const adoptedPets = await PetRepository.findAdopted()

    return adoptedPets
  }
}
