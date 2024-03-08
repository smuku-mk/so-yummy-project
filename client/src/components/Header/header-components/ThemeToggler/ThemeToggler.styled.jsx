import styled from "styled-components";

export const Input = styled.input`
  margin-top: 6px;
  margin-left: 8px;
  position: relative;
`;

export const Label = styled.label`
  width: 61px;
  height: 27px;
  border-radius: 200px;
  background-color: ${(props) => props.theme.switch};
  box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  ::before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background: linear-gradient(
      ${(props) => props.theme.switchBall1},
      ${(props) => props.theme.switchBall2}
    );
    box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    top: -3px;
    left: -3px;
  }

  ${Input}:checked {
    transform: translateX(31px);
    transition: 0.3s ease-in-out;
  }
`;
