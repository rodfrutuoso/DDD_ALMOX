import { expect, test } from "vitest";
import { TransferMaterialUseCase } from "./transfer-material";
import { TransferRegisterRepository } from "../repositories/transfer-register-repository";
import { TransferRegister } from "../entities/transfer-register";

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
    projectId: "1",
    materialId: "4",
    storekeeperId: "5",
    observation: "Material Movimentado",
    value: 5,
  });

  expect(transferRegister.value).toEqual(5);
  expect(transferRegister.observation).toEqual("Material Movimentado");
});
