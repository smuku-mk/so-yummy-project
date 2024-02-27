import styled from "styled-components";

export const MainPageTitle = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.black};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 44px;
  }
`;
