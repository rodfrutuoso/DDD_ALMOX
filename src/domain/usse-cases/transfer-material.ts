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
    const now = new Date();
    const transferRegister = new TransferRegister({
      projectId,
      materialId,
      storekeeperId,
      observation,
      value,
      transferDate: now,
    });

    await this.transferRegisterRepository.create(transferRegister);

    return transferRegister;
  }
}
