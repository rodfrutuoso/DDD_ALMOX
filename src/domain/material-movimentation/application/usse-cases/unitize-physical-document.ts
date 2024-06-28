import { Eihter, left, right } from "../../../../core/either";
import { PhysicalDocumentRepository } from "../repositories/physical-document-repository";
import { NotAllowedError } from "./errors/not-allowed-error";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface UnitizePhysicalDocumentUseCaseRequest {
  id: string;
  unitized: boolean;
}

type UnitizePhysicalDocumentResponse = Eihter<
  ResourceNotFoundError | NotAllowedError,
  {}
>;

export class UnitizePhysicalDocumentUseCase {
  constructor(private physicaldocumentRepository: PhysicalDocumentRepository) {}

  async execute({
    id,
    unitized,
  }: UnitizePhysicalDocumentUseCaseRequest): Promise<UnitizePhysicalDocumentResponse> {
    const physicalDocument = await this.physicaldocumentRepository.findByID(id);

    if (!physicalDocument) return left(new ResourceNotFoundError());

    physicalDocument.unitezed = unitized;

    await this.physicaldocumentRepository.save(physicaldocument);

    return right({});
  }
}
