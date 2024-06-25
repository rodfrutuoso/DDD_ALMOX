import { Eihter, right } from "../../../../core/either";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Project } from "../../enterprise/entities/project";
import { ProjectRepository } from "../repositories/project-repository";

interface RegisterProjectUseCaseRequest {
  project_number: string;
  description: string;
  type: string;
  baseId: string;
  city: string;
}

type RegisterProjectResponse = Eihter<null,{
  project: Project;
}>

export class RegisterProjectUseCase {
  constructor(private ProjectRepository: ProjectRepository) {}

  async execute({
    project_number,
    description,
    type,
    baseId,
    city,
  }: RegisterProjectUseCaseRequest): Promise<RegisterProjectResponse> {
    const project = Project.create({
      project_number,
      description,
      type,
      baseId: new UniqueEntityID(baseId),
      city,
      activeAlmoxID: false,
    });

    await this.ProjectRepository.create(project);

    return right({ project });
  }
}
