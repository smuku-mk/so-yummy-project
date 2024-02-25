import ChooseYourBreakfast from "../../components/MainPage/ChooseYourBreakfast/ChooseYourBreakfast";
import Search from "../../components/MainPage/Search/Search";
import PreviewCategories from "../../components/MainPage/PreviewCategories/PreviewCategories";
import {
  MainSection,
  TabletSectionMain,
  CategoriesSection,
  OtherCategoriesSection,
  MainTitle,
  SoText,
  MainDescription,
  PictureBlockContainer,
  CategoriesListContainer,
  CategoryListItem,
  OtherCategoriesButton,
  CategoriesTabletSection,
  CategoriesMobileSection,
  DesktopMainSection,
  CategoriesDesktopSection,
  BackgroundImage1Mobile,
  BackgroundImage1Tablet,
  BackgroundImage1Desktop,
  BackgroundImage2Mobile,
  BackgroundImage2Tablet,
  BackgroundImage2Desktop,
  BackgroundImage3Mobile,
  BackgroundImage3Tablet,
  BackgroundImage3Desktop,
} from "./MainPage.styled";
import leaves_mobile from "../../images/mobile_img/leaves@1x_mobile.png";
import leaves_tablet from "../../images/tablet_img/leaves@1x_tablet.png";
import leaves_desktop from "../../images/desktop_img/leaves@1x_desktop.png";

export const MainPage = () => {
  return (
    <>
      <MainSection>
        <BackgroundImage1Mobile src={leaves_mobile} alt="leaves"></BackgroundImage1Mobile>
        <BackgroundImage1Tablet src={leaves_tablet} alt="leaves"></BackgroundImage1Tablet>
        <BackgroundImage1Desktop src={leaves_desktop} alt="leaves"></BackgroundImage1Desktop>

        <DesktopMainSection>
          <TabletSectionMain>
            <MainTitle>
              <SoText>So</SoText>Yummy
            </MainTitle>
            <MainDescription>
              "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to
              save them for the future.
            </MainDescription>
            <Search></Search>
          </TabletSectionMain>
        </DesktopMainSection>

        <PictureBlockContainer>
          <ChooseYourBreakfast></ChooseYourBreakfast>
        </PictureBlockContainer>
      </MainSection>
      <CategoriesSection>
        <CategoriesListContainer>
          <CategoryListItem>
            <CategoriesMobileSection>
              <PreviewCategories mobile={true}></PreviewCategories>
            </CategoriesMobileSection>

            <CategoriesTabletSection>
              <PreviewCategories tablet={true}></PreviewCategories>
            </CategoriesTabletSection>

            <CategoriesDesktopSection>
              <PreviewCategories desktop={true}></PreviewCategories>
            </CategoriesDesktopSection>
          </CategoryListItem>
        </CategoriesListContainer>
        <BackgroundImage2Mobile src={leaves_mobile} alt="leaves"></BackgroundImage2Mobile>

        <BackgroundImage2Tablet src={leaves_tablet} alt="leaves"></BackgroundImage2Tablet>

        <BackgroundImage2Desktop src={leaves_desktop} alt="leaves"></BackgroundImage2Desktop>

        <BackgroundImage3Mobile src={leaves_mobile} alt="leaves"></BackgroundImage3Mobile>

        <BackgroundImage3Tablet src={leaves_tablet} alt="leaves"></BackgroundImage3Tablet>

        <BackgroundImage3Desktop src={leaves_desktop} alt="leaves"></BackgroundImage3Desktop>
      </CategoriesSection>
      <OtherCategoriesSection>
        <OtherCategoriesButton href="/categories">Other categories</OtherCategoriesButton>
      </OtherCategoriesSection>
    </>
  );
};
