import { beforeEach, describe, expect, it, test } from "vitest";
import { EditStorekeeperUseCase } from "./edit-storekeeper";
import { InMemoryStorekeeperRepository } from "../../../../../test/repositories/in-memory-storekeeper-repository";
import { makeStorekeeper } from "../../../../../test/factories/make-storekeeper";

let inMemoryStorekeeperRepository: InMemoryStorekeeperRepository;
let sut: EditStorekeeperUseCase;

describe("Edit Storekeeper", () => {
  beforeEach(() => {
    inMemoryStorekeeperRepository = new InMemoryStorekeeperRepository();
    sut = new EditStorekeeperUseCase(inMemoryStorekeeperRepository);
  });

  it("sould be able to edit a storekeeper", async () => {
    const storekeeper = makeStorekeeper();
    const author = makeStorekeeper({ type: "Administrator" });

    await inMemoryStorekeeperRepository.create(author);
    await inMemoryStorekeeperRepository.create(storekeeper);

    await sut.execute({
      authorId: author.id,
      storekeeperId: storekeeper.id,
      base: "Vitória da Conquista",
    });

    expect(inMemoryStorekeeperRepository.items[1]).toMatchObject({
      props: {
        base: "Vitória da Conquista",
      },
    });
  });

  it("sould not be able to edit a storekeeper if the author is not 'Administrador'", async () => {
    const storekeeper = makeStorekeeper();
    const author = makeStorekeeper({ type: "Almoxarife" });

    await inMemoryStorekeeperRepository.create(author);
    await inMemoryStorekeeperRepository.create(storekeeper);

    expect(() => {
      return sut.execute({
        authorId: author.id,
        storekeeperId: storekeeper.id,
        base: "Vitória da Conquista",
      });
    }).rejects.toBeInstanceOf(Error);

    expect(inMemoryStorekeeperRepository.items[1].base).toEqual(
      storekeeper.base
    );
  });
});
