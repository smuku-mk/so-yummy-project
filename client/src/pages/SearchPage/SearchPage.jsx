import { SearchBar } from "../../components/SearchPage/SearchBar";
import { SearchRecipesList } from "../../components/SearchPage/SearchRecipesList";
import { MainPageTitle } from "./SearchPage.styled";

export const SearchPage = () => {
  return (
    <div>
      <MainPageTitle>Search</MainPageTitle>
      <SearchBar />
      <SearchRecipesList />
    </div>
  );
};
