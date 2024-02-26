import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "http://localhost:5000";

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async ({ searchValue, searchType }) => {
      try {
        let response;
        if (searchType === "title") {
            response = await axios.get(`http://localhost:5000/search?title=${searchValue}`);
        } else if (searchType === "ingredient") {
            response = await axios.get(`http://localhost:5000/ingredients?name=${searchValue}`);
        }
        console.log(response.data);
        return response.data;
      } catch (error) {
        throw Error("Error fetching recipes");
      }
    }
  );