import { Movimentation } from "../../enterprise/entities/movimentation";
import { MovimentationRepository } from "../repositories/movimentation-repository";

interface FetchMovimentationHistoryUseCaseRequest {
  page: number;
}

interface FetchMovimentationHistoryUseCaseResponse {
  movimentations: Movimentation[];
}

export class FetchMovimentationHistoryUseCase {
  constructor(
    private movimentationRepository: MovimentationRepository,
  ) {}

  async execute({
    page,
  }: FetchMovimentationHistoryUseCaseRequest): Promise<FetchMovimentationHistoryUseCaseResponse> {
    const movimentations = await this.movimentationRepository.findManyHistory({
      page,
    });

    if (!movimentations.length)
      throw new Error("Não há histórico de moimentação com os filtros informados");

    return { movimentations };
  }
}
