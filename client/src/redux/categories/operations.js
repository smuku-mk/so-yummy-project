import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:5000/'

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await fetch(`${BASE_URL}recipes/category-list`);
    return response.json();
  });
  
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (category) => {
    const response = await fetch(`${BASE_URL}recipes?categories=${category}&limit=all`);
    const data = await response.json();
    return data[category];
  });
  