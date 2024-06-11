import { TransferRegister } from "../entities/transfer-register";

export interface TransferRegisterRepository {
  create(transferRegister: TransferRegister): Promise<void>;
}
