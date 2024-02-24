import React from "react";
import { SearchBar } from "../../components/SearchPage/SearchBar";
import { SearchRecipesList } from "../../components/SearchPage/SearchRecipesList";

export const SearchPage = () => {
  return (
    <div>
      <SearchBar />
      <SearchRecipesList />
    </div>
  );
};
