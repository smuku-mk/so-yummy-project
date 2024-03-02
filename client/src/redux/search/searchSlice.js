import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, clearSearchResults } from "./operations";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchType: "title",
    recipes: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.recipes = [];
        state.error = action.error.message;
      })
      .addCase(clearSearchResults.fulfilled, (state, action) => {
        state.status = "idle";
        state.recipes = action.payload;
        state.error = null;
      });
  },
});

export const { setSearchType } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
