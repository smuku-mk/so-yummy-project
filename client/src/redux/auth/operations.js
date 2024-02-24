import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://localhost:5000";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk(
  "users/signup",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const auth = state.auth;
      const response = await axios.post("/auth/login", credentials);
      setAuthHeader(response.data.user.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to load");
    }
    setAuthHeader(token);
    try {
      const response = await axios.get("/auth/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
