import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav``;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  text-align: center;
  padding: 32px 0;

  @media screen and (min-width: 768px) {
    text-align: left;
    padding: 0;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const LinksStyled = styled(NavLink)`
  color: ${(props) => props.theme.footerTxt};
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  cursor: pointer;

  &::not(:last-child) {
    padding-bottom: 14px;
  }
`;
