import { PaginationParams } from "../../src/core/repositories/pagination-params";
import { MovimentationRepository } from "../../src/domain/material-movimentation/application/repositories/movimentation-repository";
import { Movimentation } from "../../src/domain/material-movimentation/enterprise/entities/movimentation";

export class InMemoryMovimentationRepository
  implements MovimentationRepository
{
  public items: Movimentation[] = [];

  async findByProject(
    projectid: string,
    materialId?: string
  ): Promise<Movimentation[]> {
    const movimentations = this.items
      .filter(
        (movimentation) => movimentation.projectId.toString() === projectid
      )
      .filter(
        (movimentation) =>
          !materialId || movimentation.materialId.toString() === materialId
      );

    return movimentations;
  }

  async findManyHistory({ page }: PaginationParams): Promise<Movimentation[]> {
    const movimentations = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 40, page * 40);

    return movimentations;
  }

  async create(movimentation: Movimentation) {
    this.items.push(movimentation);
  }
}
