import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";

export interface StorekeeperProps {
  name: string;
  email: string;
  cpf: number;
  type: string;
  baseId: UniqueEntityID;
  status: string;
}

export class Storekeeper extends Entity<StorekeeperProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get cpf() {
    return this.props.cpf;
  }

  get status() {
    return this.props.status;
  }

  get type() {
    return this.props.type;
  }

  set type(type: string) {
    this.props.type = type;
  }

  set status(status: string) {
    this.props.status = status;
  }

  set baseId(baseId: string) {
    this.props.baseId = baseId;
  }

  static create(props: StorekeeperProps, id?: UniqueEntityID) {
    const storekeeper = new Storekeeper(props, id);

    return storekeeper;
  }
}
