import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { PaginationParams } from "../../../../core/repositories/pagination-params";
import { Movimentation } from "../../enterprise/entities/movimentation";

export interface MovimentationRepository {
  findByProject(projectid: string): Promise<Movimentation[]>;
  findManyHistory(params: PaginationParams): Promise<Movimentation[]>;
  create(movimentation: Movimentation): Promise<void>;
}
