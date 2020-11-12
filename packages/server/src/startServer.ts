import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
const cors = require("cors");

import { logErrors, defaultErrorHandler } from "./middleware/errors";
import { redis } from "./redis";
import { redisSessionPrefix } from "./constants";
import session from "express-session";
import connectRedis from "connect-redis";

const RedisStore = connectRedis(session);
const SESSION_SECRET = "SoME_S3CR3t";

export const startServer = function (router: Router): Application {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("dev"));

  app.use(
    session({
      store: new RedisStore({ client: redis, prefix: redisSessionPrefix }),
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      name: "sid",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    })
  );

  app.use("/api", router);

  app.use(logErrors);
  app.use(defaultErrorHandler);
  return app;
};
