import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 800px;
  }
`;
