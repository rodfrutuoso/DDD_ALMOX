import { Entity } from "../../core/entities/entity";

interface ProjectProps {
  project_number: string;
  description: string;
  type: string;
  base: string;
  city: string;
  active: boolean;
}

export class Project extends Entity<ProjectProps> {
  get project_number() {
    return this.props.project_number;
  }

  get type() {
    return this.props.type;
  }

  get description() {
    return this.props.description;
  }

  get base() {
    return this.props.base;
  }

  get city() {
    return this.props.city;
  }

  get active() {
    return this.props.active;
  }
}
