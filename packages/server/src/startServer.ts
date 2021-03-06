import express, { Application, CookieOptions, Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

import { logErrors, defaultErrorHandler } from "./middleware/errors";
import { redis } from "./redis";
import { redisSessionPrefix } from "./constants";
import session, { SessionOptions } from "express-session";
import connectRedis from "connect-redis";

const RedisStore = connectRedis(session);
const SESSION_SECRET = "SoME_S3CR3t";
const isProduction = process.env.NODE_ENV === "production";

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
  app.use(morgan("dev") as any);

  const cookie: CookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    secure: isProduction,
  };

  if (isProduction) {
    app.set("trust proxy", 1);
    cookie.sameSite = "none";
  }
  app.use(
    session({
      store: new RedisStore({ client: redis, prefix: redisSessionPrefix }),
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      name: "sidwt",
      cookie,
    })
  );

  app.use("/api", router);

  app.use(logErrors);
  app.use(defaultErrorHandler);
  return app;
};
