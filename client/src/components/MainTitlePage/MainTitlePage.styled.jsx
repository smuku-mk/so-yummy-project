import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.theme.mainTitle};
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02px;
  padding-top: 114px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
    padding-top: 136px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
    padding-top: 164px;
  }
`;
