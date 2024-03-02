import styled from "styled-components";

export const MainPageTitle = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.black};
  padding-top: 6rem;

  @media (min-width: 768px) {
    font-size: 32px;
    padding-top: 8rem;
  }

  @media (min-width: 1440px) {
    font-size: 44px;
  }
`;
