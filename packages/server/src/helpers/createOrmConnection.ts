import { Project } from "../entity/Project";
import { createConnection, getConnectionOptions } from "typeorm";
import { Issue } from "../entity/Issue";
import { User } from "../entity/User";
import { UserToProject } from "../entity/UserToProject";

export const createOrmConnection = async () => {
  const options = await getConnectionOptions(process.env.NODE_ENV);

  return process.env.NODE_ENV === "production"
    ? createConnection({
        ...options,
        url: process.env.DATABASE_URL,
        entities: [User, Issue, Project, UserToProject],
        name: "default",
      } as any)
    : createConnection({ ...options, name: "default" });
};
