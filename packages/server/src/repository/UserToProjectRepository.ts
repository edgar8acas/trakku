import { Project } from "../entity/Project";
import { EntityRepository, Repository } from "typeorm";
import { UserToProject } from "../entity/UserToProject";
import { User } from "../entity/User";

@EntityRepository(UserToProject)
export class UserToProjectRepository extends Repository<UserToProject> {
  async createAndSave(projectId: string, userId: string) {
    const user = new User();
    user.id = userId;
    const project = new Project();
    project.id = projectId;
    const created = await this.create({ user, project, isAdmin: false });
    return this.save(created);
  }
}
