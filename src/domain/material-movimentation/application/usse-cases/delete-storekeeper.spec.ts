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
    const author = makeStorekeeper({ type: "Administrator" });

    await inMemoryStorekeeperRepository.create(author);
    await inMemoryStorekeeperRepository.create(storekeeper);

    await sut.execute({ authorId: author.id.toString(), storekeeperId: storekeeper.id.toString() });

    expect(inMemoryStorekeeperRepository.items).toHaveLength(1); // there'll be only the author
  });

  it("sould not be able to delete a storekeeper if the author is not 'Administrador'", async () => {
    const storekeeper = makeStorekeeper();
    const author = makeStorekeeper({ type: "Almoxarife" });

    await inMemoryStorekeeperRepository.create(author);
    await inMemoryStorekeeperRepository.create(storekeeper);

    expect(() => {
      return sut.execute({
        authorId: author.id.toString(),
        storekeeperId: storekeeper.id.toString(),
      });
    }).rejects.toBeInstanceOf(Error);

    expect(inMemoryStorekeeperRepository.items).toHaveLength(2);
  });
});
