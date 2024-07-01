import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";

export interface MaterialProps {
  code: number;
  description: string;
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

  set description(description: string) {
    this.props.description = description;
  }

  static create(props: MaterialProps, id?: UniqueEntityID) {
    const material = new Material(props, id);

    return material;
  }
}
