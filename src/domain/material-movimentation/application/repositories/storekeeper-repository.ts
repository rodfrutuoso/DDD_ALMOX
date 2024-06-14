import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Storekeeper } from "../../enterprise/entities/storekeeper";

export interface StorekeeperRepository {
  create(Storekeeper: Storekeeper): Promise<void>;
  delete(StorekeeperId: UniqueEntityID): Promise<void>;
  save(torekeeper: Storekeeper): Promise<void>;
  findById(StorekeeperId: UniqueEntityID): Promise<Storekeeper | null>;
}
