import styled from "styled-components";

export const Block = styled.div`
  position: absolute;
  width: 225px;
  height: 92px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.mainBg};

  @media (min-width: 768px) {
    width: 260px;
    height: 100px;
  }

  @media (min-width: 1440px) {
    width: 298px;
    height: 114px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.oddTxt};
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  padding-top: 8px;
  padding-left: 8px;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    line-height: 129%;
    padding-top: 12px;
    padding-left: 12px;
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    width: 266px;
    height: 60px;
  }
`;

export const TextDAH = styled.span`
  color: ${(props) => props.theme.currentLink};
`;

export const Button = styled.a`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.02em;
  margin-left: 136px;
  line-height: 1.2;
  color: ${(props) => props.theme.oddTxt};
  display: flex;
  flex-direction: row;
  stroke: black;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-left: 164px;
  }

  @media (min-width: 1440px) {
    margin-left: 200px;
  }
`;

export const IconArrow = styled.svg`
  width: 15px;
  height: 12px;
  stroke: black;
  stroke-width: 1.5px;

  @media (min-width: 768px) {
    width: 14px;
  }
`;
