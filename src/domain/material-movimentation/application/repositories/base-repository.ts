import { Base } from "../../enterprise/entities/base";

export interface BaseRepository {
  create(Base: Base): Promise<void>;
  findByBaseName(baseName: string): Promise<Base | null>;
}
