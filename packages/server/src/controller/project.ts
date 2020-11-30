import { Router } from "express";
import asyncHandler from "express-async-handler";
import { ProjectRepository } from "../repository/ProjectRepository";
import { getCustomRepository } from "typeorm";

const ProjectController: Router = Router();

ProjectController.post(
  "/",
  asyncHandler(async (req, res, next) => {
    //TODO: Validate project
    const savedProject = await getCustomRepository(
      ProjectRepository
    ).createAndSave(req.body, req.session.userId);

    return res
      .status(200)
      .json({ status: 200, data: { project: savedProject } });
  })
);

export default ProjectController;
