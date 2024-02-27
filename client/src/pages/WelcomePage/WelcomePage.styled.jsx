import { Link } from "react-router-dom";
import styled from "styled-components";
import { unauthorizedUser } from "../../styles";
import start_mobile from "../../images/mobile_img/start_mobile.jpg";
import start_tablet from "../../images/tablet_img/start_tablet.jpg";
import start_desktop from "../../images/desktop_img/start_desktop.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
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
  margin: 0 auto;
  width: 54px;
  height: 54px;

  @media (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

export const TextBox = styled.div`
  margin-bottom: 44px;
  margin-top: 28px;

  @media (min-width: 768px) {
    margin-top: 44px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${unauthorizedUser.titleAndText};
  font-weight: 600;
  text-align: center;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #fafafa;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Register = styled(Link)`
  color: #fafafa;
  padding: 12px 24px;
  background-color: #8baa36;
  font-size: 14px;
  border-radius: 24px 44px;
  margin-right: 12px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;

  &:hover,
  :focus {
    background-color: transparent;
    border: 2px solid #fafafa;
  }

  @media (min-width: 768px) {
    padding: 18px 36px;
    font-size: 16px;
    margin-right: 18px;
  }
`;

export const Signin = styled(Link)`
  color: #fafafa;
  padding: 12px 24px;
  background-color: transparent;
  font-size: 14px;
  border-radius: 24px 44px;
  border: 2px solid #fafafa;
  transition: background-color 0.3s ease;

  &:hover,
  :focus {
    background-color: #8baa36;
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
