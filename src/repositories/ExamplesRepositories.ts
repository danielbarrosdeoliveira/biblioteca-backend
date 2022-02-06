import { EntityRepository, Repository } from "typeorm";
import { Example } from "../models/Example";

@EntityRepository(Example)
class ExamplesRepositories extends Repository<Example> {}

export { ExamplesRepositories };
