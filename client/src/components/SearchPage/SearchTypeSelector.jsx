import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  SearchBy,
  SearchByLabel,
  SearchByOption,
  SearchBySelect,
} from "./SearchPage.styled";

export const SearchTypeSelector = () => {
  const [searchType, setSearchType] = useState("title");
  const navigate = useNavigate();

  const handleTypeChange = (type) => {
    setSearchType(type);
    navigate(`/search?type=${type}`);
  };

  return (
    <SearchBy>
      <SearchByLabel htmlFor="searchType">Search By: </SearchByLabel>
      <SearchBySelect
        id="searchType"
        value={searchType}
        onChange={(e) => handleTypeChange(e.target.value)}>
        <SearchByOption value="title">Title</SearchByOption>
        <SearchByOption value="ingredient">Ingredients</SearchByOption>
      </SearchBySelect>
    </SearchBy>
  );
};
