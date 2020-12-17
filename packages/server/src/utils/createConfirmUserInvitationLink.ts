import { Redis } from "ioredis";
import { v4 } from "uuid";

export const createConfirmUserInvitationLink = async (
  url: string,
  projectId: string,
  userId: string,
  redis: Redis
) => {
  const id = v4();
  await redis.lpush(id, projectId, userId, ["ex", 60 * 60 * 24]);
  return `${url}/api/projects/${projectId}/users/confirm/${id}`;
};
