import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 335px;
  top: 305px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 30px;
  background-color: ${(props) => props.theme.loginBg};
  z-index: 2;

  @media (min-width: 768px) {
    width: 500px;
    top: 444px;
  }
  @media (min-width: 1440px) {
    top: 155px;
    left: 75%;
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.mainBg};
  line-height: 1.17;
  letter-spacing: -0.02em;
  padding: 32px 28px 18px;

  @media (min-width: 768px) {
    font-size: 28px;
    padding: 32px 50px 32px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
    padding: 44px 50px 32px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  width: 279px;
  height: 45px;
  background-color: ${(props) => props.theme.border};
  color: ${(props) => props.theme.border};
  border: 1px solid ${(props) => (props.valid ? props.theme.error : props.theme.border)};
  padding-left: 40px;
  margin-left: 28px;
  font-size: 14px;
  letter-spacing: -0.02em;
  border-radius: 6px;
  opacity: 0.8;

  &::focus,
  ::hover,
  ::active {
    opacity: 1;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 18px;
    padding-left: 50px;
    margin-left: 50px;
  }
`;

export const Icon = styled.svg`
  width: 12px;
  height: 13.5px;
  fill: ${(props) => props.theme.border};
  stroke: ${(props) => props.theme.border};
  position: absolute;
  top: 16px;
  left: 46px;
  opacity: 0.8;

  stroke: ${(props) => {
    switch (props.validation) {
      case "success":
        return "#3cbc81";
      case "warning":
        return "#f6c23e";
      case "error":
        return "#e74a3b";
      default:
        return "#fff";
    }
  }};

  @media (min-width: 768px) {
    width: 16px;
    height: 18px;
    top: 20.5px;
    left: 72px;
  }
`;

export const Submit = styled.button`
  width: 279px;
  height: 45px;
  background-color: ${(props) => props.theme.brandGreen};
  border-radius: 6px;
  margin: 0 auto;
  color: ${(props) => props.theme.mainBg};
  font-size: 16px;
  border: none;
  margin-top: 16px;
  margin-bottom: 40px;
  opacity: 1;
  transition: opacity 250ms;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.currentUser};
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
    margin-top: 26px;
    margin-bottom: 44px;
  }
`;

export const RedIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.border};
  stroke: ${(props) => props.theme.border};
  position: absolute;
  top: 20px;
  right: 19px;
  opacity: ${(props) => (props.validation === "error" ? 1 : 0)};
  pointer-events: none;

  stroke: ${(props) => (props.validation === "error" ? props.theme.error : "transparent")};
`;

export const GreenIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.border};
  stroke: ${(props) => props.theme.border};
  position: absolute;
  top: 20px;
  right: 19px;
  opacity: ${(props) => (props.validation === "error" ? 1 : 0)};
  pointer-events: none;

  stroke: ${(props) => (props.validation === "success" ? props.theme.success : "transparent")};
`;

export const OrangeIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.border};
  stroke: ${(props) => props.theme.border};
  position: absolute;
  top: 20px;
  right: 19px;
  opacity: ${(props) => (props.validation === "error" ? 1 : 0)};
  pointer-events: none;

  stroke: ${(props) => (props.validation === "warning" ? props.theme.warning : "transparent")};
`;

// export const ErrorMgs = styled.span`
// padding-top: 8px;
// font-size: 14px'
// color: ${(props) => props.theme.error};
// `;

export const WarningMsg = styled.span`
padding-top: 8px;
font-size: 14px'
color: ${(props) => props.theme.warning};
`;

export const SuccessMsg = styled.span`
padding-top: 8px;
font-size: 14px'
color: ${(props) => props.theme.success};
`;
