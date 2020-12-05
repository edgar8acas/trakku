import { Router } from "express";
import UserController from "./user";
import AuthController from "./auth";
import { authenticate } from "../middleware/auth";
import ProjectController from "./project";
const api: Router = Router();

api.use("/", AuthController);
api.use("/users", UserController);
api.use(authenticate);
api.use("/projects", ProjectController);

export default api;
