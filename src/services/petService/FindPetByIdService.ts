import { Request } from 'express'

import PetRepository from '@repository/petRepository'

export default class FindPetByIdService {
  static async execute(req: Request) {
    const { id } = req.params

    const query = await PetRepository.findById(Number(id))

    return query
  }
}
