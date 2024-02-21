import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div``;

export const Title = styled.h3`
  font-size: 24px;
  letter-spacing: -0.02em;
  color: var(--fontLight);
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--fontLight);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Register = styled(Link)`
  color: var(--fontLight);
  padding: 12px 24px;
  background-color: var(--brand);
  font-size: 14px;
  border-radius: 24px 44px;

  &:focus,
  :hover {
    background-color: transparent;
  }

  @media (min-width: 768px) {
    padding: 22px 44px;
    font-size: 16px;
  }
`;

export const Signin = styled(Link)`
  color: var(--fontLight);
  padding: 12px 24px;
  background-color: transparent;
  font-size: 14px;
  border-radius: 24px 44px;
  background-color: var(--brand);

  &:focus,
  :hover {
    background-color: var(--brand);
  }

  @media (min-width: 768px) {
    padding: 22px 44px;
    font-size: 16px;
  }
`;
