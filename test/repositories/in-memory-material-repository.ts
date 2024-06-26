import { MaterialRepository } from "../../src/domain/material-movimentation/application/repositories/material-repository";
import { Material } from "../../src/domain/material-movimentation/enterprise/entities/material";

export class InMemoryMaterialRepository implements MaterialRepository {
  public items: Material[] = [];

  async findByCode(code: number): Promise<Material | null> {
    const material = this.items.find((item) => item.code === code);

    if (!material) return null;

    return material;
  }

  async create(material: Material) {
    this.items.push(material);
  }
}
