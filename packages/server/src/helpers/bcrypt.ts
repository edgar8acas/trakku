import bcrypt from "bcryptjs";

export const isPasswordCorrect = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
