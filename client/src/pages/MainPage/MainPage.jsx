import ChooseYourBreakfast from "../../components/MainPage/ChooseYourBreakfast/СhooseYourBreakfast";
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
  CategoryTitle,
  CategoryBlock1,
  CategoryBlock2,
  DesktopMainSection,
  CategoriesDesktopSection,
} from "./MainPage.styled";

const MainPage = () => {
  return (
    <>
      <MainSection>
        <DesktopMainSection>
          <TabletSectionMain>
            <MainTitle>
              <SoText>So</SoText>Yummy
            </MainTitle>
            <MainDescription>
              "What to cook?" is not only a recipe app, it is, in fact, your
              cookbook. You can add your own recipes to save them for the
              future.
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
            <CategoryBlock1>
              <CategoryTitle>Breakfast</CategoryTitle>
            </CategoryBlock1>
            <CategoryBlock2>
              <CategoriesMobileSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                  button={true}
                ></PreviewCategories>
              </CategoriesMobileSection>

              <CategoriesTabletSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                  button={true}
                ></PreviewCategories>
              </CategoriesTabletSection>

              <CategoriesDesktopSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Polish Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Boxty Breakfast"}
                  button={true}
                ></PreviewCategories>
              </CategoriesDesktopSection>
            </CategoryBlock2>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryBlock1>
              <CategoryTitle>Miscellaneous</CategoryTitle>
            </CategoryBlock1>
            <CategoryBlock2>
              <CategoriesMobileSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                  button={true}
                ></PreviewCategories>
              </CategoriesMobileSection>

              <CategoriesTabletSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                  button={true}
                ></PreviewCategories>
              </CategoriesTabletSection>

              <CategoriesDesktopSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Polish Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Boxty Breakfast"}
                  button={true}
                ></PreviewCategories>
              </CategoriesDesktopSection>
            </CategoryBlock2>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryBlock1>
              <CategoryTitle>Chicken</CategoryTitle>
            </CategoryBlock1>
            <CategoryBlock2>
              <CategoriesMobileSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                  button={true}
                ></PreviewCategories>
              </CategoriesMobileSection>

              <CategoriesTabletSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                  button={true}
                ></PreviewCategories>
              </CategoriesTabletSection>

              <CategoriesDesktopSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Polish Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Boxty Breakfast"}
                  button={true}
                ></PreviewCategories>
              </CategoriesDesktopSection>
            </CategoryBlock2>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryBlock1>
              <CategoryTitle>Desserts</CategoryTitle>
            </CategoryBlock1>
            <CategoryBlock2>
              <CategoriesMobileSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                  button={true}
                ></PreviewCategories>
              </CategoriesMobileSection>

              <CategoriesTabletSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                  button={true}
                ></PreviewCategories>
              </CategoriesTabletSection>

              <CategoriesDesktopSection>
                <PreviewCategories
                  pictureDescription={"Banana Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Ham hock colcannon"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Polish Pancakes"}
                ></PreviewCategories>
                <PreviewCategories
                  pictureDescription={"Boxty Breakfast"}
                  button={true}
                ></PreviewCategories>
              </CategoriesDesktopSection>
            </CategoryBlock2>
          </CategoryListItem>
        </CategoriesListContainer>
      </CategoriesSection>
      <OtherCategoriesSection>
        <OtherCategoriesButton href="/categories">
          Other categories
        </OtherCategoriesButton>
      </OtherCategoriesSection>
    </>
  );
};

export default MainPage;
