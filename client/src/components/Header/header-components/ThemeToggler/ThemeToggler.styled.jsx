import styled from "styled-components";

export const Input = styled.input`
  margin-top: 8px;
  margin-left: 8px;
`;

export const Label = styled.label`
  width: 61px;
  height: 27px;
  border-radius: 200px;
  background-color: ${(props) => props.theme.switch};
  box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;

  ::before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background: linear-gradient(${(props) => props.theme.switchBall1}, ${(props) => props.theme.switchBall2});
    box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    top: 0px;
    left: 0px;
  }

  ${Input}:checked {
    transform: translateX(31px);
    transition: 0.3s ease-in-out;
  }
`;
