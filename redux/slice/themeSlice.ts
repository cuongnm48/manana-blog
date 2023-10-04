"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPageTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPageTheme } = themeSlice.actions;
export default themeSlice.reducer;
