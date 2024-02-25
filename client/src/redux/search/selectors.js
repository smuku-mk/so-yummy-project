import { createSelector } from '@reduxjs/toolkit';

export const selectSearchState = state => state.search;

export const selectSearchType = createSelector(
  [selectSearchState],
  search => search.searchType
);