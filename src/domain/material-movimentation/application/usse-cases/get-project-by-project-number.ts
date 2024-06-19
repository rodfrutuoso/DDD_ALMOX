import { Eihter, left, right } from "../../../../core/either";
import { Project } from "../../enterprise/entities/project";
import { ProjectRepository } from "../repositories/project-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetProjectByProjectNumberUseCaseRequest {
  id: string;
}

type GetProjectByProjectNumberResponse = Eihter<
  ResourceNotFoundError,
  {
    project: Project;
  }
>;

export class GetProjectByProjectNumberUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute({
    id,
  }: GetProjectByProjectNumberUseCaseRequest): Promise<GetProjectByProjectNumberResponse> {
    const project = await this.projectRepository.findByID(id);

    if (!project) return left(new ResourceNotFoundError());

    return right({ project });
  }
}
