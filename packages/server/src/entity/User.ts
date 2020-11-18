import {
  BeforeInsert,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Issue } from "./Issue";
import bcrypt from "bcryptjs";
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
  password: string;

  @OneToOne((type) => Issue, (issue) => issue.user)
  issue: Issue;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password!, 10);
  }
}
