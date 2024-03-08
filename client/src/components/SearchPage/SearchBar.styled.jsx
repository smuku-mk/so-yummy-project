import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex:direction: column;
  margin-top: 82px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 800px;
  }
`;
