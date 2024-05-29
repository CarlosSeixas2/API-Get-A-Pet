import PetRepository from '@repository/petRepository'

export default class FindAdoptedService {
  static async execute() {
    const adoptedPets = await PetRepository.findAdopted()

    return adoptedPets
  }
}
