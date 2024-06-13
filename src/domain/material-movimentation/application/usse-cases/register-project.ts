import { Project } from "../../enterprise/entities/project";
import { ProjectRepository } from "../repositories/project-repository";

interface RegisterProjectUseCaseRequest {
  project_number: string;
  description: string;
  type: string;
  base: string;
  city: string;
}

interface RegisterProjectResponse {
  project: Project;
}

export class RegisterProjectUseCase {
  constructor(private ProjectRepository: ProjectRepository) {}

  async execute({
    project_number,
    description,
    type,
    base,
    city,
  }: RegisterProjectUseCaseRequest): Promise<RegisterProjectResponse> {
    const project = Project.create({
      project_number,
      description,
      type,
      base,
      city,
      activeAlmoxID: false,
    });

    await this.ProjectRepository.create(project);

    return { project };
  }
}
