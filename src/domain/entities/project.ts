import { randomUUID } from "node:crypto";

interface ProjectProps {
  project_number: string;
  description: string;
  base: string;
  city: string;
  active: boolean;
}

export class Project {
  public id: string;
  public project_number: string;
  public description: string;
  public base: string;
  public city: string;
  public active: boolean;

  constructor(props: ProjectProps, id?: string) {
    this.id = id ?? randomUUID();
    this.project_number = props.project_number;
    this.description = props.description;
    this.base = props.base;
    this.city = props.city;
    this.active = props.active;
  }
}
