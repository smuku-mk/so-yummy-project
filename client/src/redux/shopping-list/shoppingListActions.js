import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShoppingList = createAsyncThunk(
  "shoppingList/fetchShoppingList",
  async () => {
    const response = await axios.get("/shopping-list");
    return response.data;
  }
);

export const addIngredient = createAsyncThunk(
  "shoppingList/addIngredient",
  async (ingredientId) => {
    const response = await axios.post("/shopping-list/add", { ingredientId });
    return response.data;
  }
);

export const removeIngredient = createAsyncThunk(
  "shoppingList/removeIngredient",
  async (ingredientId) => {
    const response = await axios.delete(
      `/shopping-list/remove/${ingredientId}`
    );
    return response.data;
  }
);
