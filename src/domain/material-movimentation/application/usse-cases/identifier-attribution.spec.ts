import { beforeEach, describe, expect, it } from "vitest";
import { IdentifierAttributionUseCase } from "./identifier-attribution";
import { InMemoryPhysicalDocumentRepository } from "../../../../../test/repositories/in-memory-physical-document-repository";

let inMemoryPhysicalDocumentRepository: InMemoryPhysicalDocumentRepository;
let sut: IdentifierAttributionUseCase;

describe("Create PhysicalDocument", () => {
  beforeEach(() => {
    inMemoryPhysicalDocumentRepository =
      new InMemoryPhysicalDocumentRepository();
    sut = new IdentifierAttributionUseCase(inMemoryPhysicalDocumentRepository);
  });

  it("sould be able to create a physicaldocument", async () => {
    const result = await sut.execute({
      projectId: "projeto-1",
      identifier: 123456,
    });

    expect(result.isRight()).toBeTruthy();
    if (result.isRight()) {
      expect(result.value.physicalDocument.unitezed).toEqual(false);
    }
    expect(inMemoryPhysicalDocumentRepository.items[0].id).toBeTruthy();
  });
});
