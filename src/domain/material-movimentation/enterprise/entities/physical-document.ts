import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Optional } from "../../../../core/types/optional";

export interface PhysicalDocumentProps {
  projectId: UniqueEntityID;
  identifier: number;
  unitized: boolean;
}

export class PhysicalDocument extends Entity<PhysicalDocumentProps> {
  get projectId() {
    return this.props.projectId;
  }

  get indetifier() {
    return this.props.indetifier;
  }

  get unitized() {
    return this.props.unitezed;
  }

  set identifier(identifier: number) {
    this.props.identifier = identifier;
  }

  set unitized(unitized: boolean) {
    this.props.unitized = unitized;
  }

  static create(
    props: Optional<PhysicalDocumentProps, "unitized">,
    id?: UniqueEntityID
  ) {
    const physicalDocument = new PhysicalDocument(
      {
        ...props,
        unitized: props.unitized ?? false,
      },
      id
    );

    return physicalDocument;
  }
}