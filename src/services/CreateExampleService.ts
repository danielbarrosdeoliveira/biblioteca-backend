import { getCustomRepository } from 'typeorm'
import { ExamplesRepositories } from '../repositories/ExamplesRepositories'

interface IExampleRequest {
  name: string
}

class CreateExampleService {
  async execute({ name }: IExampleRequest) {
    const examplesRepository = getCustomRepository(ExamplesRepositories)

    if (!name) {
      throw new Error('name is required')
    }

    const exampleAlreadyExists = await examplesRepository.findOne({
      name
    })

    if (exampleAlreadyExists) {
      throw new Error('name example already exists')
    }

    const example = examplesRepository.create({
      name
    })

    await examplesRepository.save(example)

    return example
  }
}

export { CreateExampleService }
