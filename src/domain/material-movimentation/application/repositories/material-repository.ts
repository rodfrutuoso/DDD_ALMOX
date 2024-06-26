import { Material } from "../../enterprise/entities/material";

export interface MaterialRepository {
  create(Material: Material): Promise<void>;
  findByCode(code: number): Promise<Material | null>;
}
