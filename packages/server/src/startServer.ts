import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { logErrors, defaultErrorHandler } from "./middleware/errors";
const cors = require("cors");

export const startServer = function (router: Router): Application {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use("/api", router);

  app.use(logErrors);
  app.use(defaultErrorHandler);
  return app;
};
