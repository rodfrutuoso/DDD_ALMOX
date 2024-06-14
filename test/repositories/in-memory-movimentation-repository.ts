import { UniqueEntityID } from "../../src/core/entities/unique-entity-id";
import { MovimentationRepository } from "../../src/domain/material-movimentation/application/repositories/movimentation-repository";
import { Movimentation } from "../../src/domain/material-movimentation/enterprise/entities/movimentation";

export class InMemoryMovimentationRepository
  implements MovimentationRepository
{
  public items: Movimentation[] = [];

  async findByProject(projectid: UniqueEntityID): Promise<Movimentation[]> {
    const movimentations = this.items.filter(
      (movimentation) => movimentation.projectId === projectid
    );

    return movimentations;
  }

  async create(movimentation: Movimentation) {
    this.items.push(movimentation);
  }
}
