import { Eihter, right } from "../../../../core/either";
import { Contract } from "../../enterprise/entities/contract";
import { ContractRepository } from "../repositories/contract-repository";

interface RegisterContractUseCaseRequest {
  contractName: string;
}

type RegisterContractResponse = Eihter<
  null,
  {
    contract: Contract;
  }
>;

export class RegisterContractUseCase {
  constructor(private ContractRepository: ContractRepository) {}

  async execute({
    contractName,
  }: RegisterContractUseCaseRequest): Promise<RegisterContractResponse> {
    const contract = Contract.create({
      contractName,
    });

    await this.ContractRepository.create(contract);

    return right({ contract });
  }
}
