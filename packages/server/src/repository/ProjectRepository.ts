import { Project } from "../entity/Project";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
  async createAndSave({ name }: Project) {}
}
