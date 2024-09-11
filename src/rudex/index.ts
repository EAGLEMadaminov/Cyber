import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./slices/SideBar";

const store = configureStore({
  reducer: {
    sideBar: SideBarReducer,
  },
});
export default store;
