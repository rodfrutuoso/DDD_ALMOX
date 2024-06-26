import { Eihter, left, right } from "../../../../core/either";
import { Material } from "../../enterprise/entities/material";
import { MaterialRepository } from "../repositories/material-repository";
import { ResourceAlreadyRegisteredError } from "./errors/resource-already-registered-error";

interface CreateMaterialUseCaseRequest {
  code: number;
  description: string;
  unit: string;
  type: string;
}

type CreateMaterialResponse = Eihter<
  ResourceAlreadyRegisteredError,
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
    const materialSearch = await this.materialRepository.findByCode(
      code
    );

    if (materialSearch) return left(new ResourceAlreadyRegisteredError());

    const material = Material.create({ code, description, unit, type });

    await this.materialRepository.create(material);

    return right({ material });
  }
}
