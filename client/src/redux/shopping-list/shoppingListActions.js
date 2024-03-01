import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShoppingList = createAsyncThunk(
  "shoppingList/fetchShoppingList",
  async () => {
    try {
      const response = await axios.get("/:userId");
      return response.data;
    } catch (error) {
      console.error("Error fetching shopping list:", error);
      throw error;
    }
  }
);

export const addIngredient = createAsyncThunk(
  "shoppingList/addIngredient",
  async () => {
    try {
      const response = await axios.post("/:userId");
      return response.data;
    } catch (error) {
      console.error("Error adding ingredient:", error);
      throw error;
    }
  }
);

export const removeIngredient = createAsyncThunk(
  "shoppingList/removeIngredient",
  async () => {
    try {
      const response = await axios.delete(`/:userId`);
      return response.data;
    } catch (error) {
      console.error("Error removing ingredient:", error);
      throw error;
    }
  }
);
