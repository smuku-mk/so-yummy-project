import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./operations";

const initialState = {
  user: { name: null, email: null, userId: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export const authReducer = authSlice.reducer;
