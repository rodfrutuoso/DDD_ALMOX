import { Contract } from "../../enterprise/entities/contract";

export interface ContractRepository {
  create(Contract: Contract): Promise<void>;
}
