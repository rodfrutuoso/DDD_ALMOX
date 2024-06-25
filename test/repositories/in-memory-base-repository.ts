import { BaseRepository } from "../../src/domain/material-movimentation/application/repositories/base-repository";
import { Base } from "../../src/domain/material-movimentation/enterprise/entities/base";

export class InMemoryBaseRepository implements BaseRepository {
  public items: Base[] = [];

  async create(base: Base) {
    console.log(base)
    this.items.push(base);
  }
}
