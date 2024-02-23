import { NavContainer, Navigation, LinksStyled } from "./Nav.styled";

export const Nav = () => {
  return (
    <NavContainer>
      <Navigation>
        <LinksStyled to="/">Ingredients</LinksStyled>
        <LinksStyled to="/">Add recipes</LinksStyled>
        <LinksStyled to="/">My recipes</LinksStyled>
        <LinksStyled to="/">Favorite</LinksStyled>
        <LinksStyled to="/">Shopping list</LinksStyled>
      </Navigation>
    </NavContainer>
  );
};
