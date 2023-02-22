import { createSlice } from "@reduxjs/toolkit";
import { UI_VARIABLES } from "constants/ui";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    mode:  UI_VARIABLES.UI_MODE_DARK
  },
  reducers: {}
})

export const uiActions = uiSlice.actions;