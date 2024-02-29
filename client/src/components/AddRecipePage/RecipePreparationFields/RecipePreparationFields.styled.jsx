import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 44px;
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.popularTitle};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  width: 100%;
  padding-left: 5px;
`;

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.inputsBg};
  border: 2px solid ${(props) => props.theme.borderIngred};
  border-radius: 6px;
  cursor: pointer;
  overflow: auto;
  overflow-x: hidden;
  padding: 16px;
  margin-bottom: 18px;
  margin-top: 24px;
  scrollbar-color: #969595;
  margin-left: 5px;
  color: #333333;
  resize: both;
  width: 100%;
  min-height: 154px;
  max-height: 600px;

  &:focus,
  &:hover {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
  }

  @media screen and (min-width: 768px) {
    height: 224px;
    padding: 22px;
    margin-bottom: 32px;
    margin-top: 32px;
    width: 505px;

    &::placeholder {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 280px;
  }
`;
