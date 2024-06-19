import { Eihter, right } from "../../../../core/either";
import { Material } from "../../enterprise/entities/material";
import { MaterialRepository } from "../repositories/material-repository";

interface CreateMaterialUseCaseRequest {
  code: number;
  description: string;
  unit: string;
  type: string;
}

type CreateMaterialResponse = Eihter<
  null,
  {
    material: Material;
  }
>;

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

    return right({ material });
  }
}
