import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchType } from "../../../redux/search/selectors.js";
import { setSearchType } from "../../../redux/search/searchSlice";
import {
  SearchBy,
  SearchByLabel,
  SearchByOption,
  SearchBySelect,
} from "./SearchTypeSelector.styled.jsx";

export const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType);

  const handleTypeChange = (type) => {
    dispatch(setSearchType(type));
  };

  return (
    <SearchBy>
      <SearchByLabel htmlFor="searchType">Search By: </SearchByLabel>
      <SearchBySelect
        id="searchType"
        value={searchType}
        onChange={(e) => handleTypeChange(e.target.value)}
      >
        <SearchByOption value="title">Title</SearchByOption>
        <SearchByOption value="ingredient">Ingredients</SearchByOption>
      </SearchBySelect>
    </SearchBy>
  );
};
