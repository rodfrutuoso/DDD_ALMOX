import { UniqueEntityID } from "../../src/core/entities/unique-entity-id";
import { PaginationParams } from "../../src/core/repositories/pagination-params";
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

  async findManyHistory({ page }: PaginationParams): Promise<Movimentation[]> {
    const movimentations = this.items
      .sort((a, b) => b.transferDate.getTime() - a.transferDate.getTime())
      .slice((page - 1) * 50, page * 50);

    return movimentations;
  }

  async create(movimentation: Movimentation) {
    this.items.push(movimentation);
  }
}
