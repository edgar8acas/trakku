import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Issue } from "./Issue";
import { UserToProject } from "./UserToProject";

@Entity()
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column({ type: "json", nullable: true })
  lists: object;

  @OneToMany((type) => UserToProject, (userToProject) => userToProject.project)
  userToProjects: UserToProject[];

  @OneToMany(() => Issue, (issue) => issue.project)
  issues: Issue[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
