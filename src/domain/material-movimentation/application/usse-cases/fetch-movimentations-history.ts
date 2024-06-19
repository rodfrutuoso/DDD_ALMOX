import { Eihter, left, right } from "../../../../core/either";
import { Movimentation } from "../../enterprise/entities/movimentation";
import { MovimentationRepository } from "../repositories/movimentation-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface FetchMovimentationHistoryUseCaseRequest {
  page: number;
}

type FetchMovimentationHistoryUseCaseResponse = Eihter<
  ResourceNotFoundError,
  {
    movimentations: Movimentation[];
  }
>;

export class FetchMovimentationHistoryUseCase {
  constructor(private movimentationRepository: MovimentationRepository) {}

  async execute({
    page,
  }: FetchMovimentationHistoryUseCaseRequest): Promise<FetchMovimentationHistoryUseCaseResponse> {
    const movimentations = await this.movimentationRepository.findManyHistory({
      page,
    });

    if (!movimentations.length) return left(new ResourceNotFoundError());

    return right({ movimentations });
  }
}
