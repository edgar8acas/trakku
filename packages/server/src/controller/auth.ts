import { Router } from "express";
import asyncHandler from "express-async-handler";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import createError from "http-errors";
import { isPasswordCorrect } from "../helpers/bcrypt";
import removeUserPassword from "../utils/removeUserPassword";
import { redis } from "../redis";
import { authenticate } from "../middleware/auth";

const AuthController: Router = Router();

AuthController.post(
  "/login",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    console.log("IP: " + req.ip);
    if (email && password) {
      const user = await getCustomRepository(UserRepository).findOne({
        email,
      });

      if (!user) {
        return next(createError(400, "The user could not be found"));
      }

      if (await isPasswordCorrect(password, user.password || "")) {
        req.session.userId = user.id;
        await redis.lpush(`${user.id}`, req.sessionID);
        return res.status(200).json({
          status: 200,
          data: { user: removeUserPassword(user), sessionID: req.sessionID },
        });
      }
      return next(createError(401, "Failed to authenticate user"));
    }
    return next(createError(400, "Wrong email or password"));
  })
);

AuthController.post(
  "/logout",
  authenticate,
  asyncHandler(async (req, res, next) => {
    req.session.destroy((err) => {
      if (err) console.log(err);
    });
    res.clearCookie("sidwt");
    res.status(200).json({});
  })
);

AuthController.get(
  "/me",
  authenticate,
  asyncHandler(async (req, res, next) => {
    const user = await getCustomRepository(UserRepository).findOne({
      id: req.session.userId,
    });
    return res.status(200).json({
      status: 200,
      data: { user: removeUserPassword(user!) },
    });
  })
);

export default AuthController;
