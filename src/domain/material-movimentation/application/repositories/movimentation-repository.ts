import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Movimentation } from "../../enterprise/entities/movimentation";

export interface MovimentationRepository {
  findByProject(projectid: UniqueEntityID): Promise<Movimentation[]>;
  create(movimentation: Movimentation): Promise<void>;
}
