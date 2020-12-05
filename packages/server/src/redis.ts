import Redis from "ioredis";

const getConnection = () => {
  console.log("NODE_ENV: " + process.env.NODE_ENV);

  if (process.env.NODE_ENV === "production") {
    console.log("REDIS_URL: " + process.env.REDIS_URL);
    return new Redis(process.env.REDIS_URL);
  }

  return new Redis();
};

export const redis = getConnection();

redis.on("error", () => {
  console.log("FROM ERROR [NODE_ENV]: ", process.env.NODE_ENV);
  console.log("FROM ERROR [REDIS_URL]: ", process.env.REDIS_URL);
});
