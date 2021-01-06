import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Issue } from "./Issue";
import bcrypt from "bcryptjs";
import { UserToProject } from "./UserToProject";
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
  })
  lastname: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text")
  password?: string;

  @OneToMany((type) => Issue, (issue) => issue.submitter)
  submittedIssues: Issue[];

  @OneToMany((type) => UserToProject, (UserToProject) => UserToProject.user)
  userToProjects: UserToProject[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password!, 10);
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
