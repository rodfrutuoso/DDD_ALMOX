import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Project } from "../../enterprise/entities/project";
import { ProjectRepository } from "../repositories/project-repository";

interface GetProjectByProjectNumberUseCaseRequest {
  id: string;
}

interface GetProjectByProjectNumberResponse {
  project: Project;
}

export class GetProjectByProjectNumberUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute({
    id,
  }: GetProjectByProjectNumberUseCaseRequest): Promise<GetProjectByProjectNumberResponse> {
    const project = await this.projectRepository.findByID(
      id
    );

    if (!project) throw new Error("Projeto não encontrado");

    return { project };
  }
}
