import React from 'react';
import { NavContainer, Navigation, LinksStyled } from './Nav.styled';

export const Nav = () => {
  return (
    <NavContainer>
      <Navigation>
        <p>Ingredients</p>
        <p>Add recipes</p>
        <p>My recipes</p>
        <p>Favorite</p>
        <p>Shopping list</p>
      </Navigation>
    </NavContainer>
  );
};
