import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  padding: 0 8px;
  margin: 0 auto;
  width: 359px;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 704px;
  }

  @media screen and (min-width: 1440x) {
    width: 1240px;
  }
`;
