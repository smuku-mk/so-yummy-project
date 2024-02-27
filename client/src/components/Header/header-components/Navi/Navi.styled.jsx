import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.navLinks};
  &.active {
    color: ${(props) => props.theme.currentLink};
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 22.4px;
    color: ${(props) => props.theme.navLinksDesktop};
  }
`;

export const MainNav = styled.ul`
  display: none;
  gap: 32px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  :last-child {
    gap: 8px;
  }
`;

export const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const SearchText = styled.span`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
