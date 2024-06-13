import { Material } from "../../enterprise/entities/material";
import { MaterialRepository } from "../repositories/material-repository";

interface CreateMaterialUseCaseRequest {
  code: number;
  description: string;
  unit: string;
  type: string;
}

interface CreateMaterialResponse {
  material: Material;
}

export class CreateMaterialUseCase {
  constructor(private materialRepository: MaterialRepository) {}

  async execute({
    code,
    description,
    unit,
    type,
  }: CreateMaterialUseCaseRequest): Promise<CreateMaterialResponse> {
    const material = Material.create({ code, description, unit, type });

    await this.materialRepository.create(material);

    return { material };
  }
}
