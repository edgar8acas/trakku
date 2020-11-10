import { Router } from "express";
import userRouter from "./UserRouter";

const api: Router = Router();

api.use("/users", userRouter);

export default api;
