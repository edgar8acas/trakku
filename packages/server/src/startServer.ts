import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

import { logErrors, defaultErrorHandler } from "./middleware/errors";
import { redis } from "./redis";
import { redisSessionPrefix } from "./constants";
import session from "express-session";
import connectRedis from "connect-redis";

const RedisStore = connectRedis(session);
const SESSION_SECRET = "SoME_S3CR3t";

export const startServer = function (router: Router): Application {
  const app = express();

  const corsOptions = {
    credentials: true,
    origin: process.env.NODE_ENV === "test" ? "*" : process.env.FRONTEND_HOST,
    methods: ["GET", "POST", "PUT", "DELETE"],
  };

  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(morgan("dev"));
  if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
  }

  app.use(
    session({
      store: new RedisStore({ client: redis, prefix: redisSessionPrefix }),
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      name: "sidwt",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
      },
    })
  );
  app.use((req, res, next) => {
    console.log("PROTOCOL: ", req.protocol);
    next();
  });
  app.use("/api", router);

  app.use(logErrors);
  app.use(defaultErrorHandler);
  return app;
};
