import { MainNav, SearchIcon, SearchText, StyledLink } from "./Navi.styled";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../../redux/categories/categoriesSlice";
import sprite from "../../../../images/sprites.svg";

export const Navi = () => {

const dispatch = useDispatch();
const navigateToCategory = () => {
  dispatch(setCategory('Beef'));
}

  return (
    <MainNav>
      <StyledLink to="/categories" onClick={navigateToCategory}>Categories</StyledLink>
      <StyledLink to="/add">Add recipes</StyledLink>
      <StyledLink to="/my">My recipes</StyledLink>
      <StyledLink to="/favorite">Favorites</StyledLink>
      <StyledLink to="/shopping-list">Shopping list</StyledLink>
      <StyledLink to="/search">
        <SearchIcon>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </SearchIcon>
        <SearchText>Search</SearchText>
      </StyledLink>
    </MainNav>
  );
};
