import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import asyncHandler from "express-async-handler";

const userRouter: Router = Router();

userRouter.post(
  "/",
  asyncHandler(async (req, res, next) => {
    await getCustomRepository(UserRepository).createAndSave(req.body);
    res.status(200).json({ msg: "User was succesfully created" });
  })
);

export default userRouter;
