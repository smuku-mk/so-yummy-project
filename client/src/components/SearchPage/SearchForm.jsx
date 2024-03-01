import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../../redux/search/operations.js";
import { selectSearchType } from "../../redux/search/selectors.js";

import { ButtonWrapper, Button, Input } from "./SearchForm.styled.jsx";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const searchType = useSelector(selectSearchType);

  const handleSearch = async () => {
    if (searchValue && searchType) {
      dispatch(fetchRecipes({ searchValue, searchType }));
    } else {
      alert("Wprowadz wartosc do pola wyszukiwania");
    }
  };
  return (
    <div>
      <Input
        placeholder="Enter the text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ButtonWrapper>
        <Button onClick={handleSearch}>Search</Button>
      </ButtonWrapper>
    </div>
  );
};
