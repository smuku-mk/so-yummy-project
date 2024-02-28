import { createSlice } from "@reduxjs/toolkit";
import {
  fetchShoppingList,
  addIngredient,
  removeIngredient,
} from "./shoppingListActions";

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    ingredients: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.status = "success";
        state.ingredients = action.payload;
      })
      .addCase(fetchShoppingList.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(addIngredient.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addIngredient.fulfilled, (state, action) => {
        state.status = "success";
        state.ingredients.push(action.payload);
      })
      .addCase(addIngredient.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(removeIngredient.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(removeIngredient.fulfilled, (state, action) => {
        state.status = "success";
        const removedIngredientId = action.payload._id;
        state.ingredients = state.ingredients.filter(
          (ingredient) => ingredient._id !== removedIngredientId
        );
      })
      .addCase(removeIngredient.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
