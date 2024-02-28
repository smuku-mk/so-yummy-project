import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShoppingList = createAsyncThunk(
  "shoppingList/fetchShoppingList",
  async () => {
    try {
      const response = await axios.get("/shopping-list");
      return response.data;
    } catch (error) {
      console.error("Error fetching shopping list:", error);
      throw error;
    }
  }
);

export const addIngredient = createAsyncThunk(
  "shoppingList/addIngredient",
  async (ingredientId) => {
    try {
      const response = await axios.post("/shopping-list/add", { ingredientId });
      return response.data;
    } catch (error) {
      console.error("Error adding ingredient:", error);
      throw error;
    }
  }
);

export const removeIngredient = createAsyncThunk(
  "shoppingList/removeIngredient",
  async (ingredientId) => {
    try {
      const response = await axios.delete(
        `/shopping-list/remove/${ingredientId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error removing ingredient:", error);
      throw error;
    }
  }
);
