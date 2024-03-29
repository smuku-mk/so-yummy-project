import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.underline};
  overflow: hidden;
  min-height: 56px;
  margin-left: 16px;
  @media (min-width: 768px) {
    margin-left: 32px;
  }
  @media (min-width: 1440px) {
   margin-left: 100px;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  scrollbar-width: none;
  overflow: auto hidden;
  gap: 28px;
  padding-left: 19px;
  @media (min-width: 768px) {
    padding-left: 30px;
  }
`;

export const CategoryItem = styled.li`
  padding-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.theme.underline};
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  flex-direction: column;
  font-size: 14px;
  line-height: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }

  &:hover, &:focus{
    color: ${(props) => props.theme.brandGreen};
  }
  &:focus{
    border-bottom:${(props) => props.theme.brandGreen} 2px solid;
  }
`;


