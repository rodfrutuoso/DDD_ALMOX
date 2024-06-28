import { beforeEach, describe, expect, it } from "vitest";
import { CreateMaterialUseCase } from "./create-material";
import { InMemoryMaterialRepository } from "../../../../../test/repositories/in-memory-material-repository";

let inMemoryMaterialRepository: InMemoryMaterialRepository;
let sut: CreateMaterialUseCase;

describe("Create Material", () => {
  beforeEach(() => {
    inMemoryMaterialRepository = new InMemoryMaterialRepository();
    sut = new CreateMaterialUseCase(inMemoryMaterialRepository);
  });

  it("sould be able to create a material", async () => {
    const result = await sut.execute({
      code: 32142141,
      description: "Material não sei das quantas",
      type: "concreto",
      unit: "CDA",
    });

    expect(result.isRight()).toBeTruthy();
    if (result.isRight()) {
      expect(result.value.material.code).toEqual(32142141);
      expect(result.value.material.type).toEqual("concreto");
    }
    expect(inMemoryMaterialRepository.items[0].id).toBeTruthy();
  });
});
