import { randomUUID } from "node:crypto";

interface TransferRegisterProps {
  projectId: string;
  materialId: string;
  storekeeperId: string;
  observation: string;
  value: number;
  transferDate: Date;
}

export class TransferRegister {
  public id: string;
  public projectId: string;
  public materialId: string;
  public storekeeperId: string;
  public observation: string;
  public value: number;
  public transferDate: Date;

  constructor(props: TransferRegisterProps, id?: string) {
    this.id = id ?? randomUUID();
    this.projectId = props.projectId;
    this.materialId = props.materialId;
    this.storekeeperId = props.storekeeperId;
    this.observation = props.observation;
    this.value = props.value;
    this.transferDate = props.transferDate;
  }
}
