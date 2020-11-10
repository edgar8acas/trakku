import { Router } from "express";
import UserController from "./user";
import LoginController from "./login";
const api: Router = Router();

api.use("/users", UserController);
api.use("/login", LoginController);

export default api;
