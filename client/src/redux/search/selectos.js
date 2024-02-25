import { createSelector } from '@reduxjs/toolkit';

export const selectSearchState = state => state.search;

export const selectSearchValue = createSelector(
  [selectSearchState],
  search => search.value
);

export const selectSearchType = createSelector(
  [selectSearchState],
  search => search.type
);