import { ContractRepository } from "../../src/domain/material-movimentation/application/repositories/contract-repository";
import { Contract } from "../../src/domain/material-movimentation/enterprise/entities/contract";

export class InMemoryContractRepository implements ContractRepository {
  public items: Contract[] = [];

  async create(contract: Contract) {
    console.log(contract)
    this.items.push(contract);
  }
}
