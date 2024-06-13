import { beforeEach, describe, expect, test } from "vitest";
import { CreateMaterialUseCase } from "./create-material";
import { MaterialRepository } from "../repositories/material-repository";
import { Material } from "../../enterprise/entities/material";
import { InMemoryMaterialRepository } from "../../../../../test/repositories/in-memory-material-repository";

let inMemoryMaterialRepository: InMemoryMaterialRepository;
let sut: CreateMaterialUseCase;

describe("Create Material", () => {
  beforeEach(() => {
    inMemoryMaterialRepository = new InMemoryMaterialRepository();
    sut = new CreateMaterialUseCase(inMemoryMaterialRepository);
  });

  test("transfer a material", async () => {
    const createMaterial = new CreateMaterialUseCase(
      inMemoryMaterialRepository
    );

    const { material } = await createMaterial.execute({
      code: 32142141,
      description: "Material não sei das quantas",
      type: "concreto",
      unit: "CDA",
    });

    expect(material.code).toEqual(32142141);
    expect(material.type).toEqual("concreto");
    expect(material.id).toBeTruthy();
    expect(inMemoryMaterialRepository.items[0].id).toBeTruthy();
  });
});
