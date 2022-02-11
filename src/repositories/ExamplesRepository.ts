import { EntityRepository, Repository } from 'typeorm'
import { Example } from '../models/Example'

@EntityRepository(Example)
class ExamplesRepository extends Repository<Example> {}

export { ExamplesRepository }
