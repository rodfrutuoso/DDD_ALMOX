import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Optional } from "../../../../core/types/optional";

export interface MovimentationProps {
  projectId: UniqueEntityID;
  materialId: UniqueEntityID;
  storekeeperId: UniqueEntityID;
  observation: string;
  value: number;
  transferDate: Date;
}

export class Movimentation extends Entity<MovimentationProps> {
  get projectId() {
    return this.props.projectId;
  }

  set projecId(projecId: UniqueEntityID) {
    this.props.projecId = projecId;
  }

  get materialId() {
    return this.props.materialId;
  }

  get storekeeperId() {
    return this.props.storekeeperId;
  }

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
    props: Optional<MovimentationProps, "transferDate">,
    id?: UniqueEntityID
  ) {
    const transferRegister = new Movimentation(
      {
        ...props,
        transferDate: props.transferDate ?? new Date(),
      },
      id
    );

    return transferRegister;
  }
}
