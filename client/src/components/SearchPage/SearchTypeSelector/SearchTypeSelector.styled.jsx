import styled from "styled-components";
import searchfor_mobile from "../../../images/mobile_img/searchfor_mobile.png";

export const SearchBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 223px;
  height: 34px;
`;

export const SearchByLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.inputPlaceholder};

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const SearchBySelect = styled.select`
  width: 146px;
  height: 34px;
  font-size: 12px;
  background-color: ${(props) => props.theme.inputsBg};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.borderIngred};
  padding: 0.5rem;
  apparence: none;
  -webkit-apparence: none;
  color: ${(props) => props.theme.inputPlaceholder};

  background: url('../../images/sprites.svg#icon-select')
  background-size: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
     width: 175px;
    height: 40px;
  }
`;

export const SearchByOption = styled.option`
  font-size: 12px;
  background-color: ${(props) => props.theme.selectSearch};
  border: 2px solid ${(props) => props.theme.borderIngred};
  width: 198px;
  height: 78px;

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
