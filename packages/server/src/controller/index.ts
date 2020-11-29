import { Router } from "express";
import UserController from "./user";
import AuthController from "./auth";
import { authenticate } from "../middleware/auth";
const api: Router = Router();

api.use("/", AuthController);
api.use("/users", UserController);
api.use(authenticate);

export default api;
