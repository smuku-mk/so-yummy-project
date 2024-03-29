import styled from "styled-components";

export const AllFooter = styled.footer`
  color: ${props => props.theme.footerTxt};
  background-color: ${props => props.theme.footerBg};
  width: 100%;
  text-align: center;
  padding: 35px 0 18px 0;

  @media screen and (min-width: 768px) {
    padding: 50px 0 24px 0;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    padding: 64px 0 50px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    width: 642px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;

export const Information = styled.div``;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.01em;

  @media screen and (min-width: 768px) {
    justify-content: left;
    font-size: 28px;
  }
`;

export const Logo = styled.svg`
  width: 32px;
  height: 32px;
  padding-right: 8px;
  fill: ${props => props.theme.footerLogo};
  stroke: ${props => props.theme.footerLogo};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    padding-right: 12px;
  }
`;

export const List = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    list-style-type: disc;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    padding: 24px 0 0 22px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    font-size: 18px;
    line-height: 133%;
  }
`;

export const Features = styled.li`
  &:not(:last-child) {
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 12px;
  }
`;
