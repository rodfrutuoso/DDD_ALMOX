import {
  Project,
  ProjectProps,
} from "../../src/domain/material-movimentation/enterprise/entities/project";
import { faker } from "@faker-js/faker";

export function makeProject(override: Partial<ProjectProps> = {}) {
  const project = Project.create({
    project_number: faker.lorem.word(),
    description: faker.lorem.sentence(),
    type: faker.helpers.arrayElement(types),
    base: faker.location.city(),
    city: faker.location.city(),
    activeAlmoxID: faker.datatype.boolean(),
    ...override,
  });

  return project;
}

const types = ["Obra", "OC", "OS", "Kit", "Medidor"];
