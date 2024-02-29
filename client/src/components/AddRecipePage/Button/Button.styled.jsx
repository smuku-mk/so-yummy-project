import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: unset;
  font-size: 14px;

  width: 129px;
  height: 46px;

  color: ${(props) => props.theme.btnTxt};
  background-color: ${(props) => props.theme.addBtn};
  padding: 0;
  border: 1px solid ${(props) => props.theme.addBtn};
  border-radius: 24px 44px;
  transition: background-color 200ms, border-color 200ms, color 200ms;
  cursor: pointer;
  margin-left: 5px;

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.addBtn};
    border: 1px solid ${(props) => props.theme.addBtn};
  }

  &.dark:focus,
  &.dark:hover {
    background-color: ${(props) => props.theme.picBg};
    border: 1px solid ${(props) => props.theme.addBtn};
  }

  &:disabled {
    filter: opacity(80%);
    cursor: auto;
    background-color: ${(props) => props.theme.picBg};
    color: rgb(224, 224, 224);
  }
  @media screen and (min-width: 768px) {
    width: 161px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 52px;
  }
`;
