import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isShowProducts: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    showProductList: (state, action: PayloadAction<boolean>) => {
      state.isShowProducts = action.payload;
    },
  },
});

export const { showProductList } = sideBarSlice.actions;

export default sideBarSlice.reducer;
