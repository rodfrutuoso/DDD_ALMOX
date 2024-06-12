import { Entity } from "../../core/entities/entity";

interface MaterialProps {
  code: string;
  type: string;
  unit: string;
}

export class Material extends Entity<MaterialProps> {
  get code() {
    return this.props.code;
  }

  get type() {
    return this.props.type;
  }

  get unit() {
    return this.props.unit;
  }

}
