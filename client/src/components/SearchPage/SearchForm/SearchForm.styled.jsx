import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  position: relative;
  width: 80%;
  height: 50px;
  font-size: 12px;
  padding: 17px;
  padding-left: 40px;
  outline: none;
  border-radius: 15px 50px;
  border: 1px solid #f0f0f0;
  background-color: ${(props) => props.theme.inputBCG};
  color: ${(props) => props.theme.inputPlaceholder};

  @media (min-width: 768px) {
    width: 40%;
    font-size: 14px;
    height: 60px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    width: 510px;
    height: 70px;
  }

  ::placeholder {
    color: ${(props) => props.theme.searchTxt};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 50px;
  color: ${(props) => props.theme.btnTxt};
  border-radius: 15px 50px;
  background-color: ${(props) => props.theme.green};
  border: none;
  font-size: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 160px;
    height: 60px;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    height: 70px;
  }

  &:hover {
    background-color: ${(props) => props.theme.addBtn};
  }
`;
