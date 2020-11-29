import { Project } from "../entity/Project";
import { createConnection } from "typeorm";
import { Issue } from "../entity/Issue";
import { User } from "../entity/User";

export const createOrmConnection = async () => {
  return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "we_track_server",
    entities: [User, Issue, Project],
    synchronize: true,
  })
    .then(async (connection) => {
      console.log("Succesfully conected to database!");
    })
    .catch((error) => console.log(error));
};
