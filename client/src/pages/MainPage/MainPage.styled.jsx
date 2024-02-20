import styled from "styled-components";
import yummy_mobile from "../../images/mobile_img/yummy_mobile.png";
import yummy_tablet from "../../images/tablet_img/yummy_tablet.png";
import yummy_desktop from "../../images/desktop_img/yummy_tablet.png";
// import backgroundImage3 from "../components/img/backgroundImage.png";

export const MainSection = styled.div`
  height: 777px;
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 132px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const TabletSectionMain = styled.div`
  @media (min-width: 768px) {
    margin-right: 4px;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OtherCategoriesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 100%;
  text-align: center;
  color: #22252a;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    font-size: 72px;
    width: 364px;
    height: 72px;
  }

  @media (min-width: 1280px) {
    font-size: 100px;
    padding-bottom: 14px;
    text-align: left;
  }
`;

export const SoText = styled.span`
  color: #8baa36;
`;

export const MainDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #23262a;
  margin-top: 14px;
  width: 248px;
  height: 72px;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    width: 362px;
    height: 54px;
    text-align: center;
    margin-top: 24px;
  }

  @media (min-width: 1280px) {
    width: 465px;
    height: 72px;
    font-size: 18px;
    margin-bottom: 50px;
    text-align: left;
    padding-top: 14px;
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

  @media (min-width: 768px) {
    width: 378px;
    height: 351px;
    padding-top: 213px;
    padding-left: 69px;
    padding-right: 49px;
    background-image: url(${yummy_tablet});
  }

  @media (min-width: 1280px) {
    width: 578px;
    height: 539px;
    padding-top: 336px;
    padding-left: 342px;
    padding-right: 0;
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
    color: #22252a;
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
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const CategoriesMobileSection = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`;

export const CategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: #001833;
  font-family: "Poppins", sans-serif;

  &:hover {
    color: #8baa36;
  }

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const CategoryBlock1 = styled.div``;

export const CategoryBlock2 = styled.div``;

export const DesktopMainSection = styled.div`
  @media (min-width: 1280px) {
    margin-right: 73px;
  }
`;

export const CategoriesDesktopSection = styled.div`
  @media (max-width: 1279px) {
    display: none;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  }
`;

// export const BackgroundBlockImage3 = styled.div`
//     width: 941px;
//     height: 912px;
//     background-image: url(${backgroundImage3});
//     background-size: cover;
//     background-repeat: no-repeat;
//     position: absolute;
//     right: 0;
//     filter: blur(4px);
//     z-index: -1;
// `;
