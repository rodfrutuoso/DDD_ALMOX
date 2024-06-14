import { UniqueEntityID } from "../../src/core/entities/unique-entity-id";
import { StorekeeperRepository } from "../../src/domain/material-movimentation/application/repositories/storekeeper-repository";
import { Storekeeper } from "../../src/domain/material-movimentation/enterprise/entities/storekeeper";

export class InMemoryStorekeeperRepository implements StorekeeperRepository {
  public items: Storekeeper[] = [];

  async create(storekeeper: Storekeeper) {
    this.items.push(storekeeper);
  }

  async delete(storekeeperId: UniqueEntityID) {
    const itemIndex = this.items.findIndex((item) => item.id == storekeeperId);

    this.items.splice(itemIndex, 1);
  }

  async save(storekeeper: Storekeeper) {
    const itemIndex = this.items.findIndex((item) => item.id == storekeeper.id);

    this.items[itemIndex] = storekeeper;
  }

  async findById(id: UniqueEntityID): Promise<Storekeeper | null> {
    const storekeeper = this.items.find((item) => item.id === id);

    if (!storekeeper) return null;

    return storekeeper;
  }
}
