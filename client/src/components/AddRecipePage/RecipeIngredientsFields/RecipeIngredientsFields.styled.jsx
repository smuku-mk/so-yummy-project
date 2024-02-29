import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.popularTitle};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  padding-left: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    width: 704px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const CountContainer = styled.div`
  border: 1px solid #969595;
  border-radius: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 28px;
  width: 92px;
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    height: 32px;
    width: 110px;
  }
`;

export const DecreaseButton = styled.button`
  background-color: transparent;
  border: none;
  height: 14px;
  padding: 0;
  width: 14px;
`;

export const IconMinus = styled.svg`
  cursor: pointer;
  stroke: ${(props) => props.theme.counterBorder};
  fill: ${(props) => props.theme.counterBorder};
  width: 14px;
  height: 14px;
`;

export const Count = styled.span`
  color: ${(props) => props.theme.counterBorder};
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IncreaseButton = styled.button`
  background-color: transparent;
  border: none;
  height: 14px;
  padding: 0;
  width: 14px;
`;

export const IconPlus = styled.svg`
  cursor: pointer;
  stroke: ${(props) => props.theme.counterBorder};
  width: 14px;
  height: 14px;
`;

export const IngredientsContainer = styled.ul`
  list-style: none;
`;

export const Ingredient = styled.li`
  display: flex;
  height: 53px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const IngredientContainer = styled.div`
  position: relative;
`;

export const IngredientInput = styled.input`
  background-color: ${(props) => props.theme.inputsBg};
  border: 2px solid ${(props) => props.theme.borderIngred};
  border-radius: 8px;
  color: ${(props) => props.theme.popularDescription};
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  margin-right: 10px;
  padding: 16px;
  width: 180px;

  &:focus,
  &:hover {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 398px;
  }
`;

export const IngredientDropDown = styled.div`
  background-color: #fff;
  height: 154px;
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-color: #969595;
  width: 194px;
  z-index: 1;
  position: relative;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #cccccc;
  }
`;

export const AmountContainer = styled.div`
  background-color: ${(props) => props.theme.inputsBg};
  border: 2px solid ${(props) => props.theme.borderIngred};
  border-radius: 8px;
  color: ${(props) => props.theme.popularDescription};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  width: 84px;

  @media screen and (min-width: 768px) {
    padding: 12px 18px;
    width: 97px;
  }
`;

export const AmountInput = styled.input`
  background-color: ${(props) => props.theme.inputsBg};
  border: none;
  color: ${(props) => props.theme.popularDescription};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  width: 26px;

  &:focus,
  &:hover {
    outline: none;
  }
`;

export const AmountSelectBoxContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.inputsBg};
  border: none;
  color: ${(props) => props.theme.popularDescription};
`;

export const AmountSelectBox = styled.select`
  background-color: ${(props) => props.theme.inputsBg};
  border: none;
  color: ${(props) => props.theme.popularDescription};
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 2px;

  &:focus,
  &:hover {
    outline: none;
  }

  option {
    background-color: #fff;
  }
`;

export const CrossButton = styled.button`
  background-color: transparent;
  border: none;
  height: 18px;
  margin-top: 16px;
  margin-left: 5px;
  padding: 0;
  width: 18px;
`;

export const IconCross = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${(props) => props.theme.counterBorder};
  stroke: ${(props) => props.theme.counterBorder};
`;
