import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @OneToOne((type) => User, (user) => user.issue)
  @JoinColumn()
  user!: User;
}
