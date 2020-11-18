interface LocationState {
  from: {
    pathname: string;
  };
}

type User = {
  email?: string;
  password?: string;
  name?: string;
  lastname?: string;
};

interface AuthInterface {
  user: User | null;
  signIn: (user: User) => Promise<any>;
  signUp: (user: User) => Promise<any>;
}
