import React, { useContext } from "react";
import request from "../utilities/request";

const authContext = React.createContext<AuthInterface | null>(null);

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth(): AuthInterface {
  const [user, setUser] = React.useState<User | null>(null);

  const signIn = function ({ email, password }: User): Promise<void> {
    return request("api/login", {
      method: "POST",
      body: { email, password },
    }).then((res) => {
      setUser({});
    });
  };

  const signUp = function (user: User): Promise<void> {
    return request("api/users", {
      method: "POST",
      body: user,
    }).then((res) => {
      setUser({});
    });
  };

  return {
    user,
    signIn,
    signUp,
  };
}
