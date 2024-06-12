import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface TransferRegisterProps {
  projectId: UniqueEntityID;
  materialId: UniqueEntityID;
  storekeeperId: UniqueEntityID;
  observation: string;
  value: number;
  transferDate: Date;
}

export class TransferRegister extends Entity<TransferRegisterProps> {
  get value() {
    return this.props.value;
  }

  get observation() {
    return this.props.observation;
  }

  get transferDate() {
    return this.props.transferDate;
  }

  static create(
    props: Optional<TransferRegisterProps, "transferDate">,
    id?: UniqueEntityID
  ) {
    const transferRegister = new TransferRegister(
      {
        ...props,
        transferDate: new Date(),
      },
      id
    );

    return transferRegister;
  }
}
