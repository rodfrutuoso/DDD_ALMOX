import { Entity } from "../../core/entities/entity";

interface StorekeeperProps {
  name: string;
  email: string;
  cpf: number;
}

export class Storkeeper extends Entity<StorekeeperProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get cpf() {
    return this.props.cpf;
  }

}
