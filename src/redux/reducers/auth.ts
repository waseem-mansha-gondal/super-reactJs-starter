import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserProps } from "../../interfaces";

export interface AuthState {
  user: UserProps | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action: PayloadAction<UserProps>) => {
      localStorage.setItem(
        "authToken",
        "ejma01290lalk109019njshaaajjaiaj109109y"
      );
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export const selectUser = (state: RootState): UserProps | null =>
  state.auth.user;

export default authSlice.reducer;
