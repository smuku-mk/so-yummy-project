import { SearchBar } from "../../components/SearchPage/SearchBar";
import { SearchRecipesList } from "../../components/SearchPage/SearchRecipesList";
import { GlobalContainer } from "../../styles";
import { MainPageTitle } from "./SearchPage.styled";

export const SearchPage = () => {
  return (
    <div>
      <GlobalContainer>
        <MainPageTitle>Search</MainPageTitle>
        <SearchBar />
        <SearchRecipesList />
      </GlobalContainer>
    </div>
  );
};
