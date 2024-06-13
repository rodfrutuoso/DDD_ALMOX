import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Project } from "../../enterprise/entities/project";

export interface ProjectRepository {
  findByProjectNumber(project_number: string): Promise<Project | null>;
  findByID(id: UniqueEntityID): Promise<Project | null>;
  create(project: Project): Promise<void>;
}
