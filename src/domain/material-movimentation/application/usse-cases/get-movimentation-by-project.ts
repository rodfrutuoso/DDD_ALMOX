import { Movimentation } from "../../enterprise/entities/movimentation";
import { MovimentationRepository } from "../repositories/movimentation-repository";
import { ProjectRepository } from "../repositories/project-repository";

interface GetMovimentationByProjectNameUseCaseRequest {
  project_number: string;
}

interface GetMovimentationByProjectNameUseCaseResponse {
  movimentations: Movimentation[];
}

export class GetMovimentationByProjectidUseCase {
  constructor(
    private movimentationRepository: MovimentationRepository,
    private projectRepository: ProjectRepository
  ) {}

  async execute({
    project_number,
  }: GetMovimentationByProjectNameUseCaseRequest): Promise<GetMovimentationByProjectNameUseCaseResponse> {
    const project = await this.projectRepository.findByProjectNumber(
      project_number
    );
    
    if (!project) throw new Error("Projeto não econtrado");

    const movimentations = await this.movimentationRepository.findByProject(
      project.id.toString()
    );

    if (!movimentations.length)
      throw new Error("Não há movimentação nesse projeto");

    return { movimentations };
  }
}
