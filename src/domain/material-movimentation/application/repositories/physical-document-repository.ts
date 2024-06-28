import { PhysicalDocument } from "../../enterprise/entities/physical-document";

export interface PhysicalDocumentRepository {
  create(PhysicalDocument: PhysicalDocument): Promise<void>;
  findByIdentifier(identifier: number): Promise<PhysicalDocument | null>;
  findByID(id: string): Promise<PhysicalDocument | null>;
  save(torekeeper: PhysicalDocument): Promise<void>;
}
