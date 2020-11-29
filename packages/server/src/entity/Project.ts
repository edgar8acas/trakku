import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Issue } from "./Issue";
import { User } from "./User";

@Entity()
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @ManyToMany(() => User, (user) => user.projects)
  users: User[];

  @OneToMany(() => Issue, (issue) => issue.project)
  issues: Issue[];
  //TODO: Add issues relation
}
