import { beforeEach, describe, expect, it } from "vitest";
import { FetchMovimentationHistoryUseCase } from "./fetch-movimentations-history";
import { InMemoryMovimentationRepository } from "../../../../../test/repositories/in-memory-movimentation-repository";
import { makeMovimentation } from "../../../../../test/factories/meke-movimentation";
import { makeProject } from "../../../../../test/factories/meke-project";

let inMemoryMovimentationRepository: InMemoryMovimentationRepository;
let sut: FetchMovimentationHistoryUseCase;

describe("Fetch Movimentations History", () => {
  beforeEach(() => {
    inMemoryMovimentationRepository = new InMemoryMovimentationRepository();
    sut = new FetchMovimentationHistoryUseCase(inMemoryMovimentationRepository);
  });

  it("should be able to fetch movimentations history", async () => {
    const newMovimentation1 = makeMovimentation({
      transferDate: new Date(2024, 5, 17),
    });
    const newMovimentation2 = makeMovimentation({
      transferDate: new Date(2024, 5, 19),
    });
    const newMovimentation3 = makeMovimentation({
      transferDate: new Date(2024, 5, 16),
    });

    await inMemoryMovimentationRepository.create(newMovimentation1);
    await inMemoryMovimentationRepository.create(newMovimentation2);
    await inMemoryMovimentationRepository.create(newMovimentation3);

    const { movimentations } = await sut.execute({
      page: 1,
    });

    expect(movimentations).toEqual([
      expect.objectContaining({
        props: expect.objectContaining({ transferDate: new Date(2024, 5, 19) }),
      }),
      expect.objectContaining({
        props: expect.objectContaining({ transferDate: new Date(2024, 5, 17) }),
      }),
      expect.objectContaining({
        props: expect.objectContaining({ transferDate: new Date(2024, 5, 16) }),
      }),
    ]);
  });
});
