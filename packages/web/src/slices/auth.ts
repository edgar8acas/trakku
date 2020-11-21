import { AuthState } from "../typings";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: AuthState = {
  currentUser: {},
  isAuthenticated: false,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
