import { createSlice } from "@reduxjs/toolkit";
import { UI_VARIABLES } from "constants/ui";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    mode:  UI_VARIABLES.UI_MODE_LIGHT,
    sidebarOpen: false
  },
  reducers: {
    toggleSidebar(state, action) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleUiMode(state, action) {
      state.mode = state.mode === UI_VARIABLES.UI_MODE_LIGHT ? UI_VARIABLES.UI_MODE_DARK : UI_VARIABLES.UI_MODE_LIGHT;
    },
  }
})

export const uiActions = uiSlice.actions;