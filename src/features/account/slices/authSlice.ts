import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AccountType } from "../types";

export type authState = {
  token: string;
};

const initialState: authState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Pick<AccountType, "token">>) {
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
