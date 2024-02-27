import styled from "styled-components";

export const StyledDiv = styled.div`
  padding-top: 32px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    gap: 32px;
    margin-bottom: 200px;
  }
`;
