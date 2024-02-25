import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../../redux/search/operations.js";
import { selectSearchType } from '../../redux/search/selectors.js';

import { Form, ButtonWrapper, Button, Input } from "./SearchPage.styled";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const searchType = useSelector(selectSearchType);

  const handleSearch = async () => {
    if (searchValue && searchType) {
      dispatch( fetchRecipes( { searchValue, searchType }));
     
    
    } else {
      alert("Wprowadz wartosc do pola wyszukiwania");
    }
  };
  return (
    <Form>
      <Input
        placeholder="Enter the text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ButtonWrapper>
        <Button onClick={handleSearch}>Search</Button>
      </ButtonWrapper>
    </Form>
  );
};
