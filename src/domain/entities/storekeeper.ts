import { randomUUID } from "node:crypto";

interface StorekeeperProps {
  name: string;
  email: string;
  cpf: number;
}

export class Storkeeper {
  public id: string;
  public name: string;
  public email: string;
  public cpf: number;

  constructor(props: StorekeeperProps, id?: string) {
    this.id = id ?? randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.cpf = props.cpf;
  }
}
