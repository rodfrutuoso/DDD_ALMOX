import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { StorekeeperRepository } from "../repositories/storekeeper-repository";

interface EditStorekeeperUseCaseRequest {
  storekeeperId: UniqueEntityID;
  authorId: UniqueEntityID;
  type?: string;
  base?: string;
  status?: string;
}

interface EditStorekeeperResponse {}

export class EditStorekeeperUseCase {
  constructor(private storekeeperRepository: StorekeeperRepository) {}

  async execute({
    storekeeperId,
    authorId,
    type,
    base,
    status,
  }: EditStorekeeperUseCaseRequest): Promise<EditStorekeeperResponse> {
    const author = await this.storekeeperRepository.findById(authorId);

    if (!author) throw new Error("usuário não encontrado");

    if (author.type != "Administrator")
      throw new Error("O usuário não tem permissão");

    const storekeeper = await this.storekeeperRepository.findById(
      storekeeperId
    );

    if (!storekeeper) throw new Error("Almoxarife não encontrado");
    
    storekeeper.type = type ?? storekeeper.type;
    storekeeper.base = base ?? storekeeper.base;
    storekeeper.status = status ?? storekeeper.status;

    await this.storekeeperRepository.save(storekeeper);

    return {};
  }
}
