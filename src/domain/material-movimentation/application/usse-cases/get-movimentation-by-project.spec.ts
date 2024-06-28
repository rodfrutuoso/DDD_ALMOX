import { beforeEach, describe, expect, it } from "vitest";
import { GetMovimentationByProjectidUseCase } from "./get-movimentation-by-project";
import { InMemoryProjectRepository } from "../../../../../test/repositories/in-memory-project-repository";
import { InMemoryMovimentationRepository } from "../../../../../test/repositories/in-memory-movimentation-repository";
import { makeMovimentation } from "../../../../../test/factories/make-movimentation";
import { makeProject } from "../../../../../test/factories/make-project";

let inMeomoryProjectRepository: InMemoryProjectRepository;
let inMemoryMovimentationRepository: InMemoryMovimentationRepository;
let sut: GetMovimentationByProjectidUseCase;

describe("Get Movimentation by project", () => {
  beforeEach(() => {
    inMeomoryProjectRepository = new InMemoryProjectRepository();
    inMemoryMovimentationRepository = new InMemoryMovimentationRepository();
    sut = new GetMovimentationByProjectidUseCase(
      inMemoryMovimentationRepository,
      inMeomoryProjectRepository
    );
  });

  it("should be able to get an array of movimentations by project", async () => {
    const newProject = makeProject({ project_number: "B-10101010" });

    await inMeomoryProjectRepository.create(newProject);

    const newMovimentation1 = makeMovimentation({
      projectId: newProject.id,
      value: 5,
    });
    const newMovimentation2 = makeMovimentation({ projectId: newProject.id });
    const newMovimentation3 = makeMovimentation({
      projectId: newProject.id,
      observation: "Movimentado",
    });

    await inMemoryMovimentationRepository.create(newMovimentation1);
    await inMemoryMovimentationRepository.create(newMovimentation2);
    await inMemoryMovimentationRepository.create(newMovimentation3);

    const result = await sut.execute({
      project_number: "B-10101010",
    });

    expect(result.isRight()).toBeTruthy();
    if (result.isRight()) {
      expect(result.value.movimentations[0].value).toEqual(5);
      expect(result.value.movimentations[2].observation).toEqual(
        "Movimentado"
      );
    }
    expect(inMeomoryProjectRepository.items[0].id).toBeTruthy();
    expect(inMemoryMovimentationRepository.items[2].id).toBeTruthy();
  });
});
