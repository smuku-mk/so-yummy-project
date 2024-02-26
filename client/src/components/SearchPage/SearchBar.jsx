import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchTypeSelector } from "./SearchTypeSelector";

export const SearchBar = () => {
  return (
    <>
      <SearchForm />
      <SearchTypeSelector />
    </>
  );
};
