import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Project } from "../../enterprise/entities/project";
import { ProjectRepository } from "../repositories/project-repository";

interface GetProjectByIDUseCaseRequest {
  id: string;
}

interface GetProjectByIDResponse {
  project: Project;
}

export class GetProjectByIDUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute({
    id,
  }: GetProjectByIDUseCaseRequest): Promise<GetProjectByIDResponse> {
    const project = await this.projectRepository.findByID(
      id
    );

    if (!project) throw new Error("Projeto não encontrado");

    return { project };
  }
}
