import { beforeEach, describe, expect, it } from "vitest";
import { RegisterContractUseCase } from "./register-contract";
import { InMemoryContractRepository } from "../../../../../test/repositories/in-memory-contract-repository";

let inMemoryContractRepository: InMemoryContractRepository;
let sut: RegisterContractUseCase;

describe("Create Contract", () => {
  beforeEach(() => {
    inMemoryContractRepository = new InMemoryContractRepository();
    sut = new RegisterContractUseCase(inMemoryContractRepository);
  });

  it("sould be able to create a contract", async () => {
    const createContract = new RegisterContractUseCase(
      inMemoryContractRepository
    );

    const result = await createContract.execute({
      contractName: "Celpe"
    });

    expect(result.isRight()).toBeTruthy();
    expect(inMemoryContractRepository.items[0].contractName).toEqual("Celpe");
  });
});
