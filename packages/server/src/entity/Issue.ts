import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column({ type: "enum", enum: ["open", "in-progress", "closed"] })
  status: string;

  @ManyToOne((type) => User, (user) => user.submittedIssues)
  submitter: User;

  @ManyToOne((type) => Project, (project) => project.issues)
  project: Project;

  @ManyToMany(() => User)
  @JoinColumn()
  asignees: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
