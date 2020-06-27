import { combineReducers } from "@reduxjs/toolkit";
import landingPageReducer from "../features/landingPage/landingPageSlice";

const rootReducer = combineReducers({
  landingPage: landingPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
