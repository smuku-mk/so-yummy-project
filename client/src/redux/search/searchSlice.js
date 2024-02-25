import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchType: 'title',
  },
  reducers: {
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
});

export const { setSearchType } = searchSlice.actions;

export const searchReducer= searchSlice.reducer;