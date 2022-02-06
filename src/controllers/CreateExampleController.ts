import { Request, Response } from "express";
import { CreateExampleService } from "../services/CreateExampleService";

class CreateExampleController {
  async store(request: Request, response: Response) {
    const { name } = request.body;

    const createExampleService = new CreateExampleService();

    const example = await createExampleService.execute({ name });

    return response.json(example);
  }
}

export { CreateExampleController };
