import { createSlice } from "@reduxjs/toolkit";
import LOCALSTORAGE_ITEMS from "constants/local-storage-items";
import { UI_VARIABLES } from "constants/ui";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    mode:  UI_VARIABLES.UI_MODE_LIGHT,
    sidebarOpen: false,
    sideBarMenuItems: [{
      icon: "home",
      to: "home",
      label: "sidebarItems.home",
      active: true
    },{
      icon: "user",
      to: "about",
      label: "sidebarItems.about_me",
      active: false
    },{
      icon: "book",
      to: "portfolio",
      label: "sidebarItems.portfolio",
      active: false
    },{
      icon: "mail",
      to: "contact",
      label: "sidebarItems.contact_me",
      active: false
    }]
  },
  reducers: {
    toggleSidebar(state, action) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarMenuItemActive(state, action) {
      state.sideBarMenuItems = state.sideBarMenuItems.map(item => {
        return {
          ...item,
          active: item.to === action.payload.section
        }
      })
    },
    initFromLocalStorageModeUi(state, action){
      const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEMS.USER_DATA));
      state.mode = storedData?.mode || state.mode;
    },
    toggleUiMode(state, action) {
      const mode = state.mode === UI_VARIABLES.UI_MODE_LIGHT ? UI_VARIABLES.UI_MODE_DARK : UI_VARIABLES.UI_MODE_LIGHT;

      const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEMS.USER_DATA));

      state.mode = mode;

      localStorage.setItem(
        LOCALSTORAGE_ITEMS.USER_DATA,
        JSON.stringify({
          ...storedData,
          mode: mode
        })
      );
    },
  }
})

export const uiActions = uiSlice.actions;