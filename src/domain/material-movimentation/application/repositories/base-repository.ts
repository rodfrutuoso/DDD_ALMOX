import { Base } from "../../enterprise/entities/base";

export interface BaseRepository {
  create(Base: Base): Promise<void>;
}
