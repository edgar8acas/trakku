import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

export interface LocationState {
  from: {
    pathname: string;
  };
}

export type User = {
  id?: string;
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

export type Project = {
  name: string;
  id: string;
};

export interface ParamTypes {
  id: string;
}

export interface List {
  id: string;
  title: string;
  issueIds: string[];
}

export interface Issue {
  id: string;
  description: string;
  asignee: User;
  status: string;
}
