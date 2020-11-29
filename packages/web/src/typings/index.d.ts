import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

export interface LocationState {
  from: {
    pathname: string;
  };
}

export type User = {
  email?: string;
  password?: string;
  name?: string;
  lastname?: string;
};

export interface AuthInterface {
  user: User | null;
  signIn: (user: User) => Promise<any>;
  signUp: (user: User) => Promise<any>;
}

export interface AuthState {
  loading: boolean;
  currentUser: object;
  isAuthenticated: boolean;
  error?: string;
}

export interface RootState {
  authState: AuthState;
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
