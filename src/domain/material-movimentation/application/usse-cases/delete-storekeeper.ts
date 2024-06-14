import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Storekeeper } from "../../enterprise/entities/storekeeper";
import { StorekeeperRepository } from "../repositories/storekeeper-repository";

interface DeleteStorekeeperUseCaseRequest {
  storekeeperId: UniqueEntityID;
  authorId: UniqueEntityID;
}

interface DeleteStorekeeperResponse {}

export class DeleteStorekeeperUseCase {
  constructor(private storekeeperRepository: StorekeeperRepository) {}

  async execute({
    storekeeperId,
    authorId,
  }: DeleteStorekeeperUseCaseRequest): Promise<DeleteStorekeeperResponse> {
    const author = await this.storekeeperRepository.findById(authorId);

    if (!author) throw new Error("usuário não encontrado");

    if (author.type != "Administrator")
      throw new Error("O usuário não tem permissão");

    const storekeeper = await this.storekeeperRepository.findById(
      storekeeperId
    );

    if (!storekeeper) throw new Error("Almoxarife não encontrado");

    await this.storekeeperRepository.delete(storekeeperId);

    return {};
  }
}
