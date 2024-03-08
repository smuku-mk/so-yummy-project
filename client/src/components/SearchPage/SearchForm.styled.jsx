import styled from "styled-components";
import searchfor_mobile from "../../images/mobile_img/searchfor_mobile.png";



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
  color: ${(props) => props.theme.mainBg};
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

export const SearchBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SearchByLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-right: 0.5rem;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const SearchBySelect = styled.select`
  width: 175px;
  height: 40px;
  font-size: 12px;
  background-color: ${(props) => props.theme.inputsBg};
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  apparence: none;
  -webkit-apparence: none;

  background: url('../../images/sprites.svg#icon-select')
  background-size: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SearchByOption = styled.option`
  font-size: 12px;
  background-color: ${(props) => props.theme.inputsBg};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SearchForElse = styled.img`
  background-image: url(${searchfor_mobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
