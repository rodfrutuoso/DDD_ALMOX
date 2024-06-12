import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { TransferRegister } from "../entities/transfer-register";
import { TransferRegisterRepository } from "../repositories/transfer-register-repository";

interface TransferMaterialUseCaseRequest {
  storekeeperId: string;
  materialId: string;
  projectId: string;
  observation: string;
  value: number;
}

export class TransferMaterialUseCase {
  constructor(private transferRegisterRepository: TransferRegisterRepository) {}

  async execute({
    storekeeperId,
    materialId,
    projectId,
    observation,
    value,
  }: TransferMaterialUseCaseRequest) {
    const transferRegister = TransferRegister.create({
      projectId: new UniqueEntityID(projectId),
      materialId: new UniqueEntityID(materialId),
      storekeeperId: new UniqueEntityID(storekeeperId),
      observation,
      value,
    });

    await this.transferRegisterRepository.create(transferRegister);

    return transferRegister;
  }
}
