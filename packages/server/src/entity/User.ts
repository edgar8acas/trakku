import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Issue } from "./Issue";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: number;

  @Column({
    length: 50,
  })
  name?: string;

  @Column("varchar", { length: 255 })
  email?: string;

  @Column("text")
  password?: string;

  @OneToOne((type) => Issue, (issue) => issue.user)
  issue?: Issue;
}
