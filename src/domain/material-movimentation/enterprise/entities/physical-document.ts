import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Optional } from "../../../../core/types/optional";

export interface PhysicalDocumentProps {
  projectId: UniqueEntityID;
  identifier: number;
  unitezed: boolean;
}

export class PhysicalDocument extends Entity<PhysicalDocumentProps> {
  get projectId() {
    return this.props.projectId;
  }

  get indetifier() {
    return this.props.indetifier;
  }

  get unitezed() {
    return this.props.unitezed;
  }

  set identifier(identifier: number) {
    this.props.identifier = identifier;
  }

  set unitezed(unitezed: boolean) {
    this.props.unitezed = unitezed;
  }

  static create(
    props: Optional<PhysicalDocumentProps, "unitezed">,
    id?: UniqueEntityID
  ) {
    const physicalDocument = new PhysicalDocument(
      {
        ...props,
        unitezed: props.unitezed ?? false,
      },
      id
    );

    return physicalDocument;
  }
}
