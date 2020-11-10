import { Router } from "express";
import userRouter from "./UserRouter";
import loginRouter from "./login";
const api: Router = Router();

api.use("/users", userRouter);
api.use("/login", loginRouter);

export default api;
