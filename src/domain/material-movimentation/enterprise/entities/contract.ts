import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";

interface ContractProps {
  contract: string;
}

export class Contract extends Entity<ContractProps> {
  get contract() {
    return this.props.contract;
  }

  static create(props: ContractProps, id?: UniqueEntityID) {
    const contract = new Contract(props, id);

    return contract;
  }
}
