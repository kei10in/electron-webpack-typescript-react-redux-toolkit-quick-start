import { createSlice } from "@reduxjs/toolkit";

const electronWebpackPackage = require("electron-webpack/package.json");

export interface LandingPageState {
  electronWebpack: {
    version: string;
  };
  electron: {
    version: string;
  };
}

const landingPageInitialState: LandingPageState = {
  electronWebpack: {
    version: electronWebpackPackage.version,
  },
  electron: {
    version: process.versions.electron,
  },
};

const landingPage = createSlice({
  name: "landingPage",
  initialState: landingPageInitialState,
  reducers: {},
});

export const {} = landingPage.actions;

export default landingPage.reducer;
