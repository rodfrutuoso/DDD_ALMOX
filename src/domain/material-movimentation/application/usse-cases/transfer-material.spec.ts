import { beforeEach, describe, expect, it } from "vitest";
import { TransferMaterialUseCase } from "./transfer-material";
import { InMemoryMovimentationRepository } from "../../../../../test/repositories/in-memory-movimentation-repository";

let inMeomoryMovimentationRepository: InMemoryMovimentationRepository;
let sut: TransferMaterialUseCase;

describe("Transfer Material", () => {
  beforeEach(() => {
    inMeomoryMovimentationRepository = new InMemoryMovimentationRepository();
    sut = new TransferMaterialUseCase(
      inMeomoryMovimentationRepository
    );
  });

  it("should be able to transfer a material", async () => {
    const { movimentation } = await sut.execute({
      projectId: "1",
      materialId: "4",
      storekeeperId: "5",
      observation: "Material Movimentado",
      value: 5,
    });

    expect(movimentation.value).toEqual(5);
    expect(movimentation.observation).toEqual("Material Movimentado");
    expect(inMeomoryMovimentationRepository.items[0].id).toBeTruthy()
  });
});
