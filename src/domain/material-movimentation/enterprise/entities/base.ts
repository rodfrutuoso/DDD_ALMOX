import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";

interface BaseProps {
  base: string;
  contract: UniqueEntityID;
}

export class Base extends Entity<BaseProps> {
  get base() {
    return this.props.base;
  }

  get contract() {
    return this.props.contract;
  }

  static create(props: BaseProps, id?: UniqueEntityID) {
    const base = new Base(props, id);

    return base;
  }
}
