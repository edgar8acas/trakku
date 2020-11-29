import { ErrorRequestHandler } from "express";
const isProd = process.env.NODE_ENV === "production";

export const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status >= 500) {
    console.log(err.stack);
  }

  next(err);
};

export const defaultErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: isProd ? "Something bad happened, try again!" : err.message,
    stack: isProd ? "" : err.stack,
  });
};
