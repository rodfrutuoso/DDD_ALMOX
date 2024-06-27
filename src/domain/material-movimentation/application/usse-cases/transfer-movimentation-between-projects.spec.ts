import { beforeEach, describe, expect, it } from "vitest";
import { TransferMovimentationBetweenProjectsUseCase } from "./transfer-movimentation-between-projects";
import { InMemoryMovimentationRepository } from "../../../../../test/repositories/in-memory-movimentation-repository";
import { makeMovimentation } from "../../../../../test/factories/meke-movimentation";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";

let inMemoryMovimentationRepository: InMemoryMovimentationRepository;
let sut: TransferMovimentationBetweenProjectsUseCase;

describe("Transfer Material", () => {
  beforeEach(() => {
    inMemoryMovimentationRepository = new InMemoryMovimentationRepository();
    sut = new TransferMovimentationBetweenProjectsUseCase(
      inMemoryMovimentationRepository
    );
  });

  it("should be able to transfer a material", async () => {
    const movimentation = makeMovimentation({
      projectId: new UniqueEntityID("Projeto-origem"),
    });

    await inMemoryMovimentationRepository.create(movimentation)

    const result = await sut.execute({
      projectIdOut: "Projeto-origem",
      projectIdIn: "Projeto-destino",
      materialId: "4",
      storekeeperId: "5",
      observation: "transferencia para terminar obra prioritária",
      baseID: "ID-BASE-VCA",
      value: 5,
    });

    console.log(result);

    expect(result.isRight()).toBeTruthy();
    if (result.isRight()) {
      expect(result.value.movimentationIn.value).toEqual(5);
      expect(result.value.movimentationOut.value).toEqual(-5);
      expect(result.value.movimentationOut.observation).toEqual(
        "Material Movimentado"
      );
    }
    expect(inMemoryMovimentationRepository.items[0].id).toBeTruthy();
  });
});
