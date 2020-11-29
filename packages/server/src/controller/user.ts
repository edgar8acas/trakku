import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import asyncHandler from "express-async-handler";
import removeUserPassword from "../utils/removeUserPassword";

const UserController: Router = Router();

UserController.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const user = await getCustomRepository(UserRepository).createAndSave(
      req.body
    );
    res
      .status(200)
      .json({ status: 200, data: { user: removeUserPassword(user) } });
  })
);

export default UserController;
