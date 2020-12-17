import { User } from "../entity/User";

const removeUserPassword = (user: User) => {
  const copy = { ...user };
  delete copy.password;
  return copy;
};

export default removeUserPassword;
