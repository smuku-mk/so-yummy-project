import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRecipe = createAsyncThunk(
  "recipe/addRecipe",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`/ownRecipes/`, payload);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  "recipe/fetchRecipeById",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/recipe/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchIngredients = async (query) => {
  try {
    console.log("Fetching ingredients with query:", query);
    const res = await axios.get(`/ingredients/test?name=${query}`);
    console.log("Received response:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching ingredients:", e.message);
    throw e;
  }
};

export const updateRecipePicture = createAsyncThunk(
  "recipe/updateRecipePicture",
  async (data, thunkAPI) => {
    try {
      const form = new FormData();
      form.append("recipeImage", data?.files[0]);

      const res = await axios.post(`/recipes/upload`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchIngredientsTTL = async () => {
  try {
    const response = await axios.get("/ingredients/list");
    const ingredientsTTL = response.data.map((ingredient) => ingredient.ttl);
    return ingredientsTTL;
  } catch (error) {
    console.error("Error fetching ingredients TTL:", error);
    return [];
  }
};
