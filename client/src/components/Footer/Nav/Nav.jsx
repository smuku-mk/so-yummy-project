import { NavContainer, Navigation, LinksStyled } from './Nav.styled';

export const Nav = () => {
  return (
    <NavContainer>
      <Navigation>
        <LinksStyled to="/search">Ingredients</LinksStyled>
        <LinksStyled to="/add">Add recipes</LinksStyled>
        <LinksStyled to="/ownRecipes">My recipes</LinksStyled>
        <LinksStyled to="/favorite">Favorite</LinksStyled>
        <LinksStyled to="/shopping-list">Shopping list</LinksStyled>
      </Navigation>
    </NavContainer>
  );
};
