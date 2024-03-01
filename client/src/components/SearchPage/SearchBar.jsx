import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchTypeSelector } from "./SearchTypeSelector";

import { FormContainer } from "./SearchBar.styled.jsx";

export const SearchBar = () => {
  return (
    <FormContainer>
      <SearchForm />
      <SearchTypeSelector />
    </FormContainer>
  );
};
