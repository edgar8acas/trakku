import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Issue } from "./Issue";
import bcrypt from "bcryptjs";
import { Project } from "./Project";
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

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

  @OneToMany((type) => Issue, (issue) => issue.owner)
  issues: Issue[];

  @ManyToMany((type) => Project, (project) => project.users)
  @JoinTable()
  projects: Project[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password!, 10);
  }
}
