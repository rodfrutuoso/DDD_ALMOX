import { Eihter, right } from "../../../../core/either";
import { Contract } from "../../enterprise/entities/contract";
import { ContractRepository } from "../repositories/contract-repository";

interface RegisterContractUseCaseRequest {
  contract: string;
}

type RegisterContractResponse = Eihter<null,{
  contract: Contract;
}>

export class RegisterContractUseCase {
  constructor(private ContractRepository: ContractRepository) {}

  async execute({
    contract,
  }: RegisterContractUseCaseRequest): Promise<RegisterContractResponse> {
    const contract = Contract.create({
      contract_number,
      description,
      type,
      base,
      city,
      activeAlmoxID: false,
    });

    await this.ContractRepository.create(contract);

    return right({ contract });
  }
}
