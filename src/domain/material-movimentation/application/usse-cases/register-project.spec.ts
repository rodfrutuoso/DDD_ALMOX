import { beforeEach, describe, expect, test } from "vitest";
import { RegisterProjectUseCase } from "./register-project";
import { InMemoryProjectRepository } from "../../../../../test/repositories/in-memory-project-repository";

let inMemoryProjectRepository: InMemoryProjectRepository;
let sut: RegisterProjectUseCase;

describe("Create project", () => {
  beforeEach(() => {
    inMemoryProjectRepository = new InMemoryProjectRepository();
    sut = new RegisterProjectUseCase(inMemoryProjectRepository);
  });

  test("transfer a project", async () => {
    const registerproject = new RegisterProjectUseCase(
      inMemoryProjectRepository
    );

    const { project } = await registerproject.execute({
      project_number: "B-10101010",
      description: "fazenda-num-sei-das-quantas-POV-onde-judas-perdeu-as-botas",
      type: "obra",
      base: "VCA",
      city: "Lagedo do Tabocal"
    });

    expect(project.project_number).toEqual("B-10101010");
    expect(project.type).toEqual("obra");
    expect(project.activeAlmoxID).toBeFalsy();
    expect(inMemoryProjectRepository.items[0].id).toBeTruthy();
  });
});
