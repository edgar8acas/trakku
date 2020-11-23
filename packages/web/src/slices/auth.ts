import { AppThunk, AuthState, RootState, User } from "../typings";
import { createSlice } from "@reduxjs/toolkit";
import request from "../utilities/request";

export const initialState: AuthState = {
  currentUser: {},
  isAuthenticated: false,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.currentUser = payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginError: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const { login, loginError, loginSuccess } = authSlice.actions;

export const loginUser = ({ email, password }: User): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(login());
    const {
      data: { user },
    } = await request("api/login", {
      method: "POST",
      body: { email, password },
    });

    dispatch(loginSuccess(user));
  } catch ({ message }) {
    dispatch(loginError(message));
  }
};

export const selectAuth = (state: RootState) => state.authState;

export default authSlice.reducer;
