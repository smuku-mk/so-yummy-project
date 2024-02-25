import styled from "styled-components";

export const Burger = styled.svg`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
