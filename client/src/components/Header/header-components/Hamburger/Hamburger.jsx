import React, { useState } from "react";
import sprite from "../../../../images/sprites.svg";
import svg from "../../../../images/sprites.svg";
import {
  HamburgerWrapper,
  Btn,
  Burger,
  CloseBtn,
  HamburgerNav,
  HamburgerToggle,
} from "./Hamburger.styled";
import { SearchIcon, SearchText, StyledLink } from "../Navi/Navi.styled";
import { Logo } from "../Logo/Logo";
import { ThemeToggler } from "../ThemeToggler";
import { GlobalContainer } from "../../../../styles";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Btn type="button" onClick={toggleMenu}>
        <Burger>
          <use xlinkHref={`${sprite}#icon-hamburger`}></use>
        </Burger>
      </Btn>
      {isOpen ? (
        <GlobalContainer>
          <HamburgerWrapper>
            <HamburgerNav>
              <Logo />
              <CloseBtn type="button" onClick={closeMenu}>
                <svg width={32} height={32}>
                  <use xlinkHref={`${svg}#icon-x`} />
                </svg>
              </CloseBtn>
            </HamburgerNav>
            <StyledLink to="/categories" onClick={closeMenu}>
              Categories
            </StyledLink>
            <StyledLink to="/add" onClick={closeMenu}>
              Add recipes
            </StyledLink>
            <StyledLink to="/my" onClick={closeMenu}>
              My recipes
            </StyledLink>
            <StyledLink to="/favorite" onClick={closeMenu}>
              Favorites
            </StyledLink>
            <StyledLink to="/shopping-list" onClick={closeMenu}>
              Shopping list
            </StyledLink>
            <StyledLink to="/search" onClick={closeMenu}>
              <SearchIcon>
                <use xlinkHref={`${sprite}#icon-search`}></use>
              </SearchIcon>
              <SearchText>Search</SearchText>
            </StyledLink>
            <HamburgerToggle>
              <ThemeToggler />
            </HamburgerToggle>
          </HamburgerWrapper>
        </GlobalContainer>
      ) : null}
    </>
  );
};
