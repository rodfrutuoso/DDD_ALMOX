import { Eihter, left, right } from "../../../../core/either";
import { StorekeeperRepository } from "../repositories/storekeeper-repository";

interface DeleteStorekeeperUseCaseRequest {
  storekeeperId: string;
  authorId: string;
}

type DeleteStorekeeperResponse = Eihter<string, {}>;

export class DeleteStorekeeperUseCase {
  constructor(private storekeeperRepository: StorekeeperRepository) {}

  async execute({
    storekeeperId,
    authorId,
  }: DeleteStorekeeperUseCaseRequest): Promise<DeleteStorekeeperResponse> {
    const author = await this.storekeeperRepository.findById(authorId);

    if (!author) return left("usuário não encontrado"); //throw new Error("usuário não encontrado");

    if (author.type != "Administrator")
      return left("O usuário não tem permissão");

    const storekeeper = await this.storekeeperRepository.findById(
      storekeeperId
    );

    if (!storekeeper) return left("Almoxarife não encontrado");

    await this.storekeeperRepository.delete(storekeeperId);

    return right({});
  }
}
