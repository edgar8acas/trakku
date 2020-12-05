import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Issue } from "./Issue";
import { UserToProject } from "./UserToProject";

@Entity()
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @OneToMany((type) => UserToProject, (userToProject) => userToProject.project)
  userToProjects: UserToProject[];

  @OneToMany(() => Issue, (issue) => issue.project)
  issues: Issue[];
}
