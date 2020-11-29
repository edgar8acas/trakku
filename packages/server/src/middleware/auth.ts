import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.userId) {
    return next();
  }
  return next(createError(401, "Failed to authenticate user"));
};
