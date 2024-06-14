import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Storekeeper } from "../../enterprise/entities/storekeeper";
import { StorekeeperRepository } from "../repositories/storekeeper-repository";

interface DeleteStorekeeperUseCaseRequest {
  storekeeperId: UniqueEntityID;
}

interface DeleteStorekeeperResponse {}

export class DeleteStorekeeperUseCase {
  constructor(private storekeeperRepository: StorekeeperRepository) {}

  async execute({
    storekeeperId,
  }: DeleteStorekeeperUseCaseRequest): Promise<DeleteStorekeeperResponse> {
    const storekeeper = await this.storekeeperRepository.findById(
      storekeeperId
    );

    if (!storekeeper) throw new Error("Almoxarife não encontrado");

    await this.storekeeperRepository.delete(storekeeperId);

    return {};
  }
}
