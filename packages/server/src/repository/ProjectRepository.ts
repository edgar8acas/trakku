import { Project } from "../entity/Project";
import {
  EntityManager,
  EntityRepository,
  Repository,
  Transaction,
  TransactionManager,
} from "typeorm";
import { UserToProject } from "../entity/UserToProject";
import { User } from "../entity/User";

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
  @Transaction()
  async createAndSave(
    { name }: Project,
    userId: number,
    @TransactionManager() manager?: EntityManager
  ) {
    const project = new Project();
    project.name = name;
    const savedProject = await manager?.save(project);
    const userToProject = new UserToProject();

    userToProject.project = savedProject;
    userToProject.user = await manager?.findOne(User, userId);
    userToProject.isAdmin = true;
    await manager?.save(userToProject);
    return savedProject;
  }
}
