import styled from "styled-components";

export const Block = styled.div`
  position: absolute;
  width: 225px;
  height: 92px;
  border-radius: 8px;
  background-color: #fafafa;

  @media (min-width: 768px) {
    width: 260px;
    height: 100px;
  }

  @media (min-width: 1280px) {
    width: 298px;
    height: 114px;
  }
`;

export const Text = styled.p`
  color: #3e4462;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  padding-top: 8px;
  padding-left: 8px;

  @media (min-width: 768px) {
    line-height: 129%;
    padding-top: 12px;
    padding-left: 12px;
    font-size: 14px;
  }

  @media (min-width: 1280px) {
    width: 266px;
    height: 60px;
  }
`;

export const TextDAH = styled.span`
  color: #8baa36;
`;

export const Button = styled.a`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.02em;
  margin-left: 136px;
  line-height: 1.2;
  color: #3e4462;

  @media (min-width: 768px) {
    margin-left: 164px;
  }

  @media (min-width: 1280px) {
    margin-left: 200px;
  }
`;
