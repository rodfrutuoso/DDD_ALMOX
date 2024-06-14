import { beforeEach, describe, expect, it, test } from "vitest";
import { DeleteStorekeeperUseCase } from "./delete-storekeeper";
import { InMemoryStorekeeperRepository } from "../../../../../test/repositories/in-memory-storekeeper-repository";
import { makeStorekeeper } from "../../../../../test/factories/make-storekeeper";

let inMemoryStorekeeperRepository: InMemoryStorekeeperRepository;
let sut: DeleteStorekeeperUseCase;

describe("Delete Storekeeper", () => {
  beforeEach(() => {
    inMemoryStorekeeperRepository = new InMemoryStorekeeperRepository();
    sut = new DeleteStorekeeperUseCase(inMemoryStorekeeperRepository);
  });

  it("sould be able to delete a storekeeper", async () => {
    const storekeeper = makeStorekeeper();

    await inMemoryStorekeeperRepository.create(storekeeper);

    await sut.execute({ storekeeperId: storekeeper.id });

    expect(inMemoryStorekeeperRepository.items).toHaveLength(0);
  });
});
