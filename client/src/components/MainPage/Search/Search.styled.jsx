import styled from "styled-components";

export const Form = styled.div`
  margin-top: 570px;
  position: absolute;

  @media (min-width: 768px) {
    display: block;
    margin-top: 330px;
    margin-right: 368px;
  }

  @media (min-width: 1440px) {
    margin-top: 462px;
    margin-left: -230px;
  }
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 12px;
  border-radius: 15px 50px;
  width: 295px;
  height: 52px;
  padding: 17px;
  padding-left: 40px;
  outline: none;
  border: 1px solid #fafafa;
  font-family: "Poppins", sans-serif;
  background-color: ${(props) => props.theme.label};

  @media (min-width: 768px) {
    width: 362px;
    height: 59px;
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    width: 510px;
    height: 70px;
  }

  ::placeholder {
    color: ${(props) => props.theme.searchTxt};
  }
`;

export const Button = styled.button`
  width: 113px;
  height: 52px;
  color: ${(props) => props.theme.editProfile};
  border-radius: 15px 50px;
  position: absolute;
  right: 0;
  background-color: ${(props) => props.theme.footerBg};
  border: 0;
  font-weight: 400;
  font-size: 14px;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 161px;
    height: 59px;
  }

  @media (min-width: 1440px) {
    height: 70px;
    right: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.searchBtn};
    border: 1px solid #000000;
  }
`;
