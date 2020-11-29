import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @ManyToOne((type) => User, (user) => user.issues)
  owner: User;

  @ManyToOne((type) => Project, (project) => project.issues)
  project: Project;
}
