import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex; 
  flex-direction: column;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
`;