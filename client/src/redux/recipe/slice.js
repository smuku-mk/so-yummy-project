import { createSlice } from "@reduxjs/toolkit";
import { addRecipe, fetchRecipeById, updateRecipePicture } from "./actions";

const initialState = {
  recipe: null,
  recipeImage: null,
  isLoading: false,
  error: null,
  ingredients: [],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {
    resetRecipeImage: state => {
      state.recipeImage = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecipeById.pending, handlePending)
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, handleRejected)
      .addCase(addRecipe.pending, handlePending)
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipe = action.payload;
      })
      .addCase(addRecipe.rejected, handleRejected)

      .addCase(updateRecipePicture.pending, handlePending)
      .addCase(updateRecipePicture.fulfilled, (state, action) => {
        state.recipeImage = action.payload.recipeImage;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateRecipePicture.rejected, handleRejected);
  },
});

export const { resetRecipeImage } = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
