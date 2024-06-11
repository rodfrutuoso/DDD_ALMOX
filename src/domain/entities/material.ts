import { randomUUID } from "node:crypto";

interface MaterialProps {
  code: string;
  type: string;
  unit: string;
}

export class Material {
  public id: string;
  public code: string;
  public type: string;
  public unit: string;

  constructor(props: MaterialProps, id?: string) {
    this.id = id ?? randomUUID();
    this.code = props.code;
    this.type = props.type;
    this.unit = props.unit;
    // Object.assign(this, props);
  }
}
