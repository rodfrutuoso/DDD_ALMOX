import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Movimentation } from "../../enterprise/entities/movimentation";
import { MovimentationRepository } from "../repositories/movimentation-repository";
import { ProjectRepository } from "../repositories/project-repository";

interface GetMovimentationByProjectNameUseCaseRequest {
  projectid: UniqueEntityID;
}

interface GetMovimentationByProjectNameUseCaseResponse {
  movimentation: Movimentation[];
}

export class GetMovimentationByProjectidUseCase {
  constructor(
    private movimentationRepository: MovimentationRepository,
    private projectRepository: ProjectRepository
  ) {}

  async execute({
    projectid,
  }: GetMovimentationByProjectNameUseCaseRequest): Promise<GetMovimentationByProjectNameUseCaseResponse> {
    const project = await this.projectRepository.findByID(projectid);

    if (!project) throw new Error("Projeto não econtrado");

    const movimentation = await this.movimentationRepository.findByProject(
      project.id
    );

    if (!movimentation.length)
      throw new Error("Não há movimentação nesse projeto");

    return { movimentation };
  }
}
