import styled from "styled-components";

export const Form = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }

  margin-top: 24px;
  position: relative;
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  border-radius: 15px 50px;
  width: 369px;
  height: 59px;
  padding: 17px;
  padding-left: 40px;
  outline: none;
  border: 1px solid #f0f0f0;
  font-family: "Poppins", sans-serif;

  @media (min-width: 1280px) {
    width: 510px;
    height: 70px;
  }

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const Button = styled.button`
  width: 161px;
  height: 59px;
  color: #fafafa;
  border-radius: 15px 50px;
  position: absolute;
  right: 1px;
  background-color: #22252a;
  border: 1px solid #000000;
  font-weight: 400;
  font-size: 16px;
  font-family: "Poppins", sans-serif;

  @media (min-width: 1280px) {
    height: 70px;
  }

  &:hover {
    background-color: #8baa36;
  }
`;
