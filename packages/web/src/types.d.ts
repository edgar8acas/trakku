interface LocationState {
  from: {
    pathname: string;
  };
}

type User = {
  email?: string;
  password?: string;
};

interface AuthInterface {
  user: User | null;
  signIn: (user: User) => Promise<any>;
}
