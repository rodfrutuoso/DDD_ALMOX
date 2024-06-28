import { PhysicalDocument } from "../../enterprise/entities/physical-document";

export interface PhysicalDocumentRepository {
  create(PhysicalDocument: PhysicalDocument): Promise<void>;
  findByIdentifier(identifier: number): Promise<PhysicalDocument | null>;
}
