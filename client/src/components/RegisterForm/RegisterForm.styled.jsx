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
  background-color: #2a2c36;
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
  color: #fff;
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
  background-color: #2a2c36;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding-left: 40px;
  padding-left: 40px;
  margin-left: 28px;
  font-size: 14px;
  letter-spacing: -0.02em;
  border-radius: 6px;

  &:focus,
  :hover,
  :active {
    border: 1px solid #fff;
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
  fill: #fff;
  position: absolute;
  top: 16px;
  left: 46px;
  opacity: 0.8;

  &:hover,
  :active {
    opacity: 1;
  }

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
  background-color: #8baa36;
  border-radius: 6px;
  margin: 0 auto;
  color: #fafafa;
  font-size: 16px;
  border: none;
  margin-top: 16px;
  margin-bottom: 40px;
  opacity: 1;
  transition: opacity 250ms;

  &:hover,
  &:focus {
    color: #fafafa;
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
    margin-top: 26px;
    margin-bottom: 44px;
  }
`;

export const OtherIcon = styled.svg`
  width: 20px;
  height: 20px;
  top: 14px;
  right: 36px;
  position: absolute;

  @media (min-width: 768px) {
    right: 60px;
    top: 19px;
  }

  @media (min-width: 1440px) {
    right: 62px;
  }
`;

export const RedIcon = styled(OtherIcon)`
  fill: #e74a3b;
`;

export const GreenIcon = styled(OtherIcon)`
  fill: #3cbc81;
`;

export const OrangeIcon = styled(OtherIcon)`
  fill: #f6c23e;
`;

export const WarningMsg = styled.span`
  padding-top: 8px;
  font-size: 14px;
  color: #f6c23e;
  padding-left: 28px;

  @media (min-width: 768px) {
    padding-left: 50px;
  }
`;

export const SuccessMsg = styled.span`
  padding-top: 8px;
  font-size: 14px;
  color: #3cbc81;
  padding-left: 28px;

  @media (min-width: 768px) {
    padding-left: 50px;
  }
`;

export const ErrorMsg = styled.span`
  padding-top: 8px;
  font-size: 14px;
  color: #e74a3b;
  padding-left: 28px;

  @media (min-width: 768px) {
    padding-left: 50px;
  }
`;
