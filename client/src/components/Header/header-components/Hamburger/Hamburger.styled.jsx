import styled from "styled-components";
import leaves_mobile from "../../../../images/mobile_img/leaves@2x_mobile.png";

export const HamburgerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.iconBg};
  background-image: url(${leaves_mobile});
  background-position: top 100px left 50px;
  background-repeat: no-repeat;
  transition: 0.5s;
`;

export const HamburgerNav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  padding: 20px;
`;

export const Burger = styled.svg`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
stroke: ${(props) => props.theme.black};
background-color: transparent;
border: none;
cursor: pointer;

&:hover {
  stroke: ${(props) => props.theme.green};
  ease-in-out;
}
`;

export const HamburgerToggle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 50px;
`;
