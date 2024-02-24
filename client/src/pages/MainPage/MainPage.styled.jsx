import styled from "styled-components";
import yummy_mobile from "../../images/mobile_img/yummy_mobile.png";
import yummy_tablet from "../../images/tablet_img/yummy_tablet.png";
import yummy_desktop from "../../images/desktop_img/yummy_desktop.png";
import leaves1x_mobile from "../../images/mobile_img/leaves@1x_mobile.png";
import leaves1x_tablet from "../../images/tablet_img/leaves@1x_tablet.png";
import leaves1x_desktop from "../../images/desktop_img/leaves@1x_desktop.png";
import background_mobile from "../../images/mobile_img/background_mobile.png";
import background_tablet from "../../images/tablet_img/background_tablet.png";
import background_desktop from "../../images/desktop_img/background_desktop.png";

export const MainSection = styled.div`
  position: relative;
  height: 777px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 132px;
  background-image: url(${leaves1x_mobile}), url(${background_mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -10px 70px, 60px center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url(${leaves1x_tablet}), url(${background_tablet});
    background-position: 300px 70px, 500px center;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 184px;
    padding-top: 126px;
    background-image: url(${leaves1x_desktop}), url(${background_desktop});
    background-position: 1200px 40px, 1000px center;
    background-size: 976px 944px;
    height: 800px;
  }
`;

export const TabletSectionMain = styled.div`
  @media (min-width: 768px) {
    width: 369px;
    margin-left: 32px;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const OtherCategoriesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 646px;
`;

export const MainTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${(props) => props.theme.currentUser};
  margin-left: 36px;
  margin-right: 36px;

  @media (min-width: 768px) {
    font-size: 72px;
    margin-left: 0;
    margin-right: 0;
    text-align: left;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const SoText = styled.span`
  color: ${(props) => props.theme.currentLink};
`;

export const MainDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  margin-left: 64px;
  margin-right: 63px;
  margin-top: 14px;
  color: ${(props) => props.theme.text};
  width: 248px;
  height: 72px;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 24px;
    margin-right: 0;
    margin-left: 0;
    width: 362px;
  }

  @media (min-width: 1440px) {
    width: 465px;
    font-size: 18px;
    margin-bottom: 50px;
    text-align: left;
    margin-top: 0;
  }
`;

export const PictureBlockContainer = styled.div`
  width: 320px;
  height: 296px;
  background-image: url(${yummy_mobile});
  background-size: cover;
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 88px;
  z-index: 2;

  @media (min-width: 768px) {
    width: 378px;
    height: 351px;
    padding-top: 213px;
    padding-left: 69px;
    padding-right: 49px;
    background-image: url(${yummy_tablet});
  }

  @media (min-width: 1440px) {
    width: 578px;
    height: 539px;
    padding-top: 336px;
    padding-left: 342px;
    padding-right: 184px;
    background-image: url(${yummy_desktop});
  }
`;

export const CategoriesListContainer = styled.ul`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const CategoryListItem = styled.li`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const OtherCategoriesButton = styled.a`
    border-radius: 15px 50px;
    background-color: transparent;
    margin-top: 40px;
    width: 195px;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.currentUser};
    border: 1px solid #8BAA36;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;

    @media (min-width: 768px) {
        width: 239px;
        height 61px;
    }
`;

export const CategoriesTabletSection = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const CategoriesMobileSection = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const CategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.headers};
  font-family: "Poppins", sans-serif;

  &:hover {
    color: ${(props) => props.theme.currentLink};
  }

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const CategoryBlock1 = styled.div``;

export const CategoryBlock2 = styled.div``;

export const DesktopMainSection = styled.div`
  @media (min-width: 1440px) {
    width: 510px;
    height: 71px;
    margin-right: 73px;
    margin-bottom: 267px;
  }
`;

export const CategoriesDesktopSection = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const BackgroundImage1Mobile = styled.img`
  width: 171px;
  height: 184px;
  object-fit: cover;
  position: absolute;
  top: 48px;
  left: -100px;
  transform: rotate(-65deg);
  filter: blur(5px);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BackgroundImage1Tablet = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 292px;
    height: 315px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: -175px;
    transform: rotate(-65deg);
    filter: blur(5px);
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BackgroundImage1Desktop = styled.img`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 438px;
    height: 474px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: -230px;
    transform: rotate(-65deg);
    filter: blur(5px);
  }
`;

export const BackgroundImage2Mobile = styled.img`
  width: 256px;
  height: 382px;
  object-fit: cover;
  position: absolute;
  top: 2000px;
  left: -50px;
  transform: rotate(80deg);
  filter: blur(5px);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BackgroundImage2Tablet = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 423px;
    height: 646px;
    object-fit: cover;
    position: absolute;
    top: 2100px;
    left: -100px;
    transform: rotate(80deg);
    filter: blur(5px);
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BackgroundImage2Desktop = styled.img`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 568px;
    height: 852px;
    object-fit: cover;
    position: absolute;
    top: 2200px;
    left: -200px;
    transform: rotate(80deg);
    filter: blur(5px);
  }
`;

export const BackgroundImage3Mobile = styled.img`
  width: 160px;
  height: 172px;
  object-fit: cover;
  position: absolute;
  top: 2650px;
  right: 0;
  transform: rotate(80deg);
  filter: blur(5px);
  transform: rotate(-90deg);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BackgroundImage3Tablet = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 290px;
    height: 313px;
    object-fit: cover;
    position: absolute;
    top: 2750px;
    right: 0px;
    transform: rotate(80deg);
    filter: blur(5px);
    transform: rotate(-90deg);
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BackgroundImage3Desktop = styled.img`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 438px;
    height: 474px;
    object-fit: cover;
    position: absolute;
    top: 2750px;
    right: 20px;
    transform: rotate(80deg);
    filter: blur(5px);
    transform: rotate(-90deg);
  }
`;
