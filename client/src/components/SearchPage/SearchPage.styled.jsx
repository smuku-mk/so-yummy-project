import styled from "styled-components";

export const SearchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 2rem;
  @media (min-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 1440px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
