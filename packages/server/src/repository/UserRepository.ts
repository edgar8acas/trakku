import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createAndSave({ name, email, password, lastname }: User) {
    const created = await this.create({ name, lastname, email, password });
    return this.save(created);
  }
}
