import { Router } from "express";
import asyncHandler from "express-async-handler";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import createError from "http-errors";
import { isPasswordCorrect } from "../helpers/bcrypt";
import { redis } from "../redis";
const LoginController: Router = Router();
LoginController.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await getCustomRepository(UserRepository).findOne({
        email,
      });

      if (!user) {
        return next(createError(400, "The user could not be found"));
      }

      if (await isPasswordCorrect(password, user.password)) {
        req.session.userId = user.id;
        return res.status(200).json({ status: 200 });
      }
      return next(createError(401, "Failed to authenticate user"));
    }
    return next(createError(400, "Wrong email or password"));
  })
);

export default LoginController;
