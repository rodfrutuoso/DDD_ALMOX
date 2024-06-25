import { beforeEach, describe, expect, it } from "vitest";
import { RegisterBaseUseCase } from "./register-base";
import { InMemoryBaseRepository } from "../../../../../test/repositories/in-memory-base-repository";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";

let inMemoryBaseRepository: InMemoryBaseRepository;
let sut: RegisterBaseUseCase;

describe("Create Base", () => {
  beforeEach(() => {
    inMemoryBaseRepository = new InMemoryBaseRepository();
    sut = new RegisterBaseUseCase(inMemoryBaseRepository);
  });

  it("sould be able to create a base", async () => {
    const createBase = new RegisterBaseUseCase(
      inMemoryBaseRepository
    );

    const result = await createBase.execute({
      baseName: "Vitória da Conquista", contractID: "Contrato 1"
    });

    expect(result.isRight()).toBeTruthy();
    expect(inMemoryBaseRepository.items[0].baseName).toEqual("Vitória da Conquista");
    expect(inMemoryBaseRepository.items[0].contractID).toBeInstanceOf(UniqueEntityID)
  });
});
