import { beforeEach, describe, expect, it } from "vitest";
import { RegisterContractUseCase } from "./register-contract";
import { InMemoryContractRepository } from "../../../../../test/repositories/in-memory-contract-repository";
import { ResourceAlreadyRegisteredError } from "./errors/resource-already-registered-error";

let inMemoryContractRepository: InMemoryContractRepository;
let sut: RegisterContractUseCase;

describe("Register Contract", () => {
  beforeEach(() => {
    inMemoryContractRepository = new InMemoryContractRepository();
    sut = new RegisterContractUseCase(inMemoryContractRepository);
  });

  it("sould be able to register a contract", async () => {
    const createContract = new RegisterContractUseCase(
      inMemoryContractRepository
    );

    const result = await createContract.execute({
      contractName: "Celpe",
    });

    expect(result.isRight()).toBeTruthy();
    expect(inMemoryContractRepository.items[0].contractName).toEqual("Celpe");
  });

  it("Sould not be able to register a contract if contractName is already registered", async () => {
    const registerContract = new RegisterContractUseCase(
      inMemoryContractRepository
    );

    await registerContract.execute({
      contractName: "Celpe",
    });

    const result = await registerContract.execute({
      contractName: "Celpe",
    });

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toBeInstanceOf(ResourceAlreadyRegisteredError);
  });
});
