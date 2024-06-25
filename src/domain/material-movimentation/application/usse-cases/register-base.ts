import { Eihter, right } from "../../../../core/either";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Base } from "../../enterprise/entities/base";
import { BaseRepository } from "../repositories/base-repository";

interface RegisterBaseUseCaseRequest {
  baseName: string;
  contractID: string;
}

type RegisterBaseResponse = Eihter<
  null,
  {
    base: Base;
  }
>;

export class RegisterBaseUseCase {
  constructor(private BaseRepository: BaseRepository) {}

  async execute({
    baseName,
    contractID,
  }: RegisterBaseUseCaseRequest): Promise<RegisterBaseResponse> {
    const base = Base.create({
      baseName,
      contractID: new UniqueEntityID(contractID),
    });

    await this.BaseRepository.create(base);

    return right({ base });
  }
}
