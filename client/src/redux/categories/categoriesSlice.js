import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchRecipes } from './operations';


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    currentCategory: '',
    recipes: []
  },
  reducers: {
    setCategory: (state, action) => {
    state.currentCategory = action.payload;
  },
},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    })
    .addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export const { setCategory } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;