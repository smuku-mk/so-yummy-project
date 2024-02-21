import styled from 'styled-components';

export const NavContainer = styled.nav``;

export const Navigation = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 32px 0 32px 0;

  @media screen and (min-width: 768px) {
    display: block;
    text-align: left;
    padding: 0;
  }
`;

export const Links = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  cursor: pointer;
  &::not(:last-child) {
  padding-bottom: 14px;

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 24px;
  }
`;
