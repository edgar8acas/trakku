import Redis from "ioredis";

const getConnection = () => {
  if (process.env.NODE_ENV === "production") {
    return new Redis(process.env.REDIS_URL);
  }

  return new Redis();
};

export const redis = getConnection();

redis.on("error", () => {
  console.log("ERROR WHEN CONNECTING TO REDIS");
  console.log("[NODE_ENV]: ", process.env.NODE_ENV);
  console.log("[REDIS_URL]: ", process.env.REDIS_URL);
});
