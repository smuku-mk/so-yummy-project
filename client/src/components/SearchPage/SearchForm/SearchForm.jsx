import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../../../redux/search/operations.js";
import { selectSearchType } from "../../../redux/search/selectors.js";

import {
  ButtonWrapper,
  Button,
  Input,
  Container,
} from "./SearchForm.styled.jsx";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const searchType = useSelector(selectSearchType);

  const handleSearch = async () => {
    if (searchValue && searchType) {
      dispatch(fetchRecipes({ searchValue, searchType }));
    } else {
      alert("Please enter a value into the search field");
    }
  };

  return (
    <Container>
      <Input
        placeholder="Enter the text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ButtonWrapper>
        <Button type="button" onClick={handleSearch}>
          Search
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
