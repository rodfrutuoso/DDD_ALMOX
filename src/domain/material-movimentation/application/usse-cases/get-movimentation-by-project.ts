import { Eihter, left, right } from "../../../../core/either";
import { Movimentation } from "../../enterprise/entities/movimentation";
import { MovimentationRepository } from "../repositories/movimentation-repository";
import { ProjectRepository } from "../repositories/project-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetMovimentationByProjectNameUseCaseRequest {
  project_number: string;
}

type GetMovimentationByProjectNameUseCaseResponse = Eihter<
  ResourceNotFoundError,
  {
    movimentations: Movimentation[];
  }
>;

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

    if (!project) return left(new ResourceNotFoundError());

    const movimentations = await this.movimentationRepository.findByProject(
      project.id.toString()
    );

    if (!movimentations.length) return left(new ResourceNotFoundError());

    return right({ movimentations });
  }
}
