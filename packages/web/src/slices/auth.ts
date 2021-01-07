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
    loading: (state) => {
      state.loading = true;
    },
    success: (state, { payload }) => {
      state.currentUser = payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    error: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticated = false;
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.error = "";
      state.isAuthenticated = false;
      state.loading = false;
      state.currentUser = {};
    },
  },
});

export const { loading, error, success, logoutSuccess } = authSlice.actions;

export const loginUser = ({ email, password }: User): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(loading());
    const {
      data: { user },
    } = await request("api/login", {
      method: "POST",
      body: { email, password },
    });

    dispatch(success(user));
  } catch ({ message }) {
    dispatch(error(message));
  }
};

export const signUpUser = (user: User): AppThunk => async (dispatch) => {
  try {
    dispatch(loading());
    const {
      data: { user: saved },
    } = await request("api/users", {
      method: "POST",
      body: user,
    });
    dispatch(success(saved));
  } catch ({ message }) {
    dispatch(error(message));
  }
};

export const checkAuthentication = (): AppThunk => async (dispatch) => {
  try {
    const {
      data: { user },
    } = await request("api/me");
    dispatch(success(user));
  } catch (error) {
    dispatch(logoutSuccess());
  }
};

export const logout = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading());
    await request("api/logout", { method: "POST" });
  } catch (error) {
  } finally {
    dispatch(logoutSuccess());
  }
};

export const selectAuth = (state: RootState) => state.authState;

export default authSlice.reducer;
