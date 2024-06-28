import { PhysicalDocumentRepository } from "../../src/domain/material-movimentation/application/repositories/physical-document-repository";
import { PhysicalDocument } from "../../src/domain/material-movimentation/enterprise/entities/physical-document";

export class InMemoryPhysicalDocumentRepository
  implements PhysicalDocumentRepository
{
  public items: PhysicalDocument[] = [];

  async findByIdentifier(identifier: number): Promise<PhysicalDocument | null> {
    const physicaldocument = this.items.find(
      (item) => item.identifier === identifier
    );

    if (!physicaldocument) return null;

    return physicaldocument;
  }

  async create(physicaldocument: PhysicalDocument) {
    this.items.push(physicaldocument);
  }
}
