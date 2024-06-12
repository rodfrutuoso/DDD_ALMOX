import { expect, test } from "vitest";
import { TransferMaterialUseCase } from "./transfer-material";
import { TransferRegisterRepository } from "../repositories/transfer-register-repository";
import { TransferRegister } from "../entities/transfer-register";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

const transferRegisterRepository: TransferRegisterRepository = {
  create: async (transferRegister: TransferRegister) => {
    return;
  },
};

test("transfer a material", async () => {
  const transferMaterial = new TransferMaterialUseCase(
    transferRegisterRepository
  );

  const transferRegister = await transferMaterial.execute({
    projectId: new UniqueEntityID("1"),
    materialId: new UniqueEntityID("4"),
    storekeeperId: new UniqueEntityID("5"),
    observation: "Material Movimentado",
    value: 5,
  });

  expect(transferRegister.value).toEqual(5);
  expect(transferRegister.observation).toEqual("Material Movimentado");
});
