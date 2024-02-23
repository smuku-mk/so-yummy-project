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
  padding: 32px 28px 40px 28px;
  background-color: var(--formDark);
  z-index: 2;

  @media (min-width: 768px) {
    width: 500px;
    padding: 44px 50px;
    top: 444px;
  }
  @media (min-width: 1280px) {
    top: 155px;
    left: 75%;
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: var(--fontLight);
  line-height: 1.17;
  letter-spacing: -0.02em;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 50px;
  }
`;

export const InputContainer = styled.div``;

export const Label = styled.label`
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const Icon = styled.svg``;

export const Input = styled.input`
  width: 279px;
  height: 45px;
  background-color: var(--formDark);
  color: var(--fontLight);
  border: 1px solid var(--fontLight);
  padding-left: 40px;
  font-size: 14px;
  letter-spacing: -0.02em;
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 18px;
    padding-left: 45px;
  }
`;

export const Submit = styled.button`
  width: 279px;
  height: 45px;
  background-color: var(--brand);
  border-radius: 6px;
  margin: 0 auto;
  color: var(--fontLight);
  font-size: 16px;

  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
  }
`;

/* export const Link = styled.link`
  text-align: center;
  font-size: 14px;
  color: var(--fontLight);
`; */
