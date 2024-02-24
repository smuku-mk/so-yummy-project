import styled from "styled-components";
import { Link } from "react-router-dom";
import login_mobile from "../../images/mobile_img/login_mobile.png";
import login_tablet from "../../images/tablet_img/login_tablet.png";
import login_desktop from "../../images/desktop_img/login_desktop.png";
import rectangle_mobile from "../../images/mobile_img/rectangle_mobile.png";
import rectangle_tablet from "../../images/tablet_img/rectangle_tablet.png";
import rectangle_desktop from "../../images/desktop_img/rectangle_desktop.png";

export const SigninPageStyled = styled.section`
  height: 100vh;
  background-image: url(${login_mobile}), url(${rectangle_mobile});
  background-repeat: no-repeat;
  background-position: top 87px center, bottom 0 center;
  background-size: 258px 250px, 100% 58%;

  @media (min-width: 768px) {
    background-image: url(${login_tablet}), url(${rectangle_tablet});
    background-position: top 100px center, bottom 0 center;
    background-size: 409px 359px, 100% 59%;
  }

  @media (min-width: 1440px) {
    background-image: url(${login_desktop}), url(${rectangle_desktop});
    background-position: top 115px left 113px, bottom 0 center;
    background-size: 532px 468px, 100% 58%;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.mainBg}
  font-size: 14px;
  position: absolute;
  top: 642px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: underline;

  &:visited {
  color: ${(props) => props.theme.mainBg}
  }

  &:hover {
    color: ${(props) => props.theme.brandGreen}
  }

  @media (min-width: 768px) {
  font-size: 16px;
  top: 881px;
  }

  @media (min-width: 1440px) {
  top: 592px;
  left: 75%;
  }

`;
