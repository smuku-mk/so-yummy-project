import styled from 'styled-components';

export const Footer = styled.footer`  
color: var(--footerTxt);
  background-color: var(--currentUser);
  width: 100%;
  text-align: center;
  padding: 0;
  padding-top: 64px;
  padding-bottom: 50px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
}`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Information = styled.div``;

export const Title = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.01em;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const List = styled.ul`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  padding: 24px 0 0 0;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    font-size: 18px;
    line-height: 133%;
  }
`;

export const Features = styled.li`
  &:not(:last-child) {
    padding-bottom: 12px;
  }
`;
