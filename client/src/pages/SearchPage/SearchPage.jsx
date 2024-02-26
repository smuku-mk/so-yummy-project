import React from "react";
import { SearchBar } from "../../components/SearchPage/SearchBar";
import { SearchRecipesList } from "../../components/SearchPage/SearchRecipesList";
import { MainPageTitle } from "../../components/SearchPage/SearchPage.styled";

export const SearchPage = () => {
  return (
    <div>
      <MainPageTitle>Search</MainPageTitle>
      <SearchBar />
      <SearchRecipesList />
    </div>
  );
};
