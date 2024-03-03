import React from "react";
import { SearchForm } from "../SearchForm/SearchForm.jsx";
import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector.jsx";

import { FormContainer } from "./SearchBar.styled.jsx";

export const SearchBar = () => {
  return (
    <FormContainer>
      <SearchForm />
      <SearchTypeSelector />
    </FormContainer>
  );
};
