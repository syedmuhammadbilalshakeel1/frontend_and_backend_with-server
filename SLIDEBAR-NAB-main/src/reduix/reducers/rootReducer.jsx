import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./userSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
});
