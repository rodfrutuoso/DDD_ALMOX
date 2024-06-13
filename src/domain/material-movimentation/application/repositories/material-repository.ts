import { Material } from "../../enterprise/entities/material";

export interface MaterialRepository {
  create(Material: Material): Promise<void>;
}
