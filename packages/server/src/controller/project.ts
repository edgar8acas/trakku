import { Router } from "express";
import asyncHandler from "express-async-handler";
import { ProjectRepository } from "../repository/ProjectRepository";
import { getCustomRepository } from "typeorm";
import { redis } from "../redis";
import createError from "http-errors";
import { sendEmail } from "../utils/sendEmail";
import { createConfirmUserInvitationLink } from "../utils/createConfirmUserInvitationLink";
import { UserRepository } from "../repository/UserRepository";
import { UserToProjectRepository } from "../repository/UserToProjectRepository";
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

ProjectController.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const projects = await getCustomRepository(
      ProjectRepository
    ).getUserProjects(req.session.userId);
    return res.status(200).json({ status: 200, data: { projects } });
  })
);

ProjectController.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const project = await getCustomRepository(ProjectRepository).getProjectById(
      id
    );
    return res.status(200).json({ status: 200, data: { project } });
  })
);

ProjectController.post(
  "/:projectId/users",
  asyncHandler(async (req, res, next) => {
    const { projectId } = req.params;
    const { emails } = req.body;

    const projectExists = await getCustomRepository(
      ProjectRepository
    ).getProjectById(projectId);

    const userExists = await getCustomRepository(UserRepository).findOne({
      email: emails,
    });

    if (!projectExists || !userExists) {
      return next(createError(400, "The project or user could not be found. "));
    }

    console.log("URL: ", {
      url: req.url,
      baseUrl: req.baseUrl,
      original: req.originalUrl,
    });

    await sendEmail({
      recipient: emails as string,
      url: await createConfirmUserInvitationLink(
        process.env.API_HOST as string,
        projectId,
        userExists.id,
        redis
      ),
      linkText: "Join",
      subject: `You have an invitation to join to ${projectExists.name} project.`,
    });

    return res.status(200).json({ status: 200 });
  })
);

ProjectController.get(
  "/:projectId/users/confirm/:token",
  asyncHandler(async (req, res, next) => {
    const { projectId, token } = req.params;

    const [savedUserId, savedProjectId] = await redis.lrange(token, 2, 3);

    if (savedProjectId !== projectId) {
      return next(createError(404, "Token expired"));
    }

    await getCustomRepository(UserToProjectRepository).createAndSave(
      projectId,
      savedUserId
    );

    return res.status(301).redirect(process.env.FRONTEND_HOST as string);
  })
);

export default ProjectController;
