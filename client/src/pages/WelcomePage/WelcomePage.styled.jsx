import { Link } from "react-router-dom";
import styled from "styled-components";
import start_mobile from "../../images/mobile_img/start_mobile.jpg";
import start_tablet from "../../images/tablet_img/start_tablet.jpg";
import start_desktop from "../../images/desktop_img/start_desktop.jpg";

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${start_mobile});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;

  @media (min-width: 768px) {
    background-image: url(${start_tablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${start_desktop});
  }
`;

export const Logo = styled.svg`
  margin-left: auto;
  margin-right: auto;
  width: 54px;
  height: 54px;

  @media (min-width: 768px) {
    width: 68px;
    height: 68px;
`;

export const TextBox = styled.div`
  padding: 28px 35px 44px 35px;

  @media (min-width: 768px) {
    padding: 44px 134px 40px 134px;
  }

  @media (min-width: 1440px) {
    padding: 44px 400px 40px 400px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.mainBg};
  font-weight: 600;
  text-align: center;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.mainBg};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Register = styled(Link)`
  color: ${(props) => props.theme.mainBg};
  padding: 12px 24px;
  background-color: ${(props) => props.theme.brandGreen};
  font-size: 14px;
  border-radius: 24px 44px;
  margin-right: 12px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;

  &:hover,
  :focus {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.mainBg};
  }

  @media (min-width: 768px) {
    padding: 18px 36px;
    font-size: 16px;
    margin-right: 18px;
  }
`;

export const Signin = styled(Link)`
  color: ${(props) => props.theme.mainBg};
  padding: 12px 24px;
  background-color: transparent;
  font-size: 14px;
  border-radius: 24px 44px;
  border: 2px solid ${(props) => props.theme.mainBg};
  transition: background-color 0.3s ease;

  &:hover,
  :focus {
    background-color: ${(props) => props.theme.brandGreen};
    border: 2px solid transparent;
  }

  @media (min-width: 768px) {
    padding: 18px 36px;
    font-size: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
