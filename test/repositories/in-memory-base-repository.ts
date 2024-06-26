import { BaseRepository } from "../../src/domain/material-movimentation/application/repositories/base-repository";
import { Base } from "../../src/domain/material-movimentation/enterprise/entities/base";

export class InMemoryBaseRepository implements BaseRepository {
  public items: Base[] = [];

  async findByBaseName(baseName: string): Promise<Base | null> {
    const base = this.items.find(
      (item) => item.baseName === baseName
    );

    if (!base) return null;

    return base;
  }

  async create(base: Base) {
    this.items.push(base);
  }
}
