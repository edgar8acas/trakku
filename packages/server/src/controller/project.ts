import { Router } from "express";
import asyncHandler from "express-async-handler";

const ProjectController: Router = Router();

ProjectController.post(
  "/",
  asyncHandler(async (req, res, next) => {})
);

export default ProjectController;
