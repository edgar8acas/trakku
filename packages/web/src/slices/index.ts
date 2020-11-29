import { RootState } from "../typings";
import { combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import authReducer from "./auth";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  authState: authReducer,
});

export default rootReducer;
