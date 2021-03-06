import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class UserToProject {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  isAdmin: Boolean;

  @ManyToOne(() => User, (user) => user.userToProjects)
  user?: User;

  @ManyToOne(() => Project, (project) => project.userToProjects)
  project?: Project;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
