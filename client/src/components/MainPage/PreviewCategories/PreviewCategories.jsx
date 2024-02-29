import {
  Block,
  BlockPicture,
  BlockPictureDescription,
  PictureDescription,
  Button,
  BlockPictureImg,
  CategoryBlock1,
  CategoryBlock2,
  CategoryTitle,
  CategoriesTabletSection,
  CategoriesListContainer,
  CategoryElement,
  CategoriesMobileSection,
  CategoriesDesktopSection,
} from "./PreviewCategories.styled";
import { useState, useEffect } from "react";

const PreviewCategories = ({ mobile, tablet, desktop }) => {
  const [breakfastData, setBreakfastData] = useState([]);
  const [miscellaneousData, setMiscellaneousData] = useState([]);
  const [chickenData, setChickenData] = useState([]);
  const [dessertsData, setDessertsData] = useState([]);

  const setState = {
    'Breakfast': setBreakfastData,
    'Miscellaneous': setMiscellaneousData,
    'Chicken': setChickenData,
    'Dessert': setDessertsData,
  };
  
  useEffect(() => {
    const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert'];
    const limit = 4;
  
    fetch(`http://localhost:5000/recipes/main-page?categories=${categories.join(',')}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        categories.forEach(category => {
          setState[category](data[category]);
        });
      })
      .catch((error) => console.error(`Error fetching data:`, error));
      console.log('fetch');
      // eslint-disable-next-line
  }, []);


/* stary kod
  useEffect(() => {
    fetch("http://localhost:5000/recipes/main-page")
      .then((response) => response.json())
      .then((data) => {
        setBreakfastData(data.Breakfast);
        setMiscellaneousData(data.Miscellaneous);
        setChickenData(data.Chicken);
        setDessertsData(data.Dessert);
      })
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);
 */
  const [firstBreakfast, twoBreakfast, threeBreakfast, fourBreakfast] = breakfastData.slice(0, 4);
  const [firstMiscellaneous, twoMiscellaneous, threeMiscellaneous, fourMiscellaneous] = miscellaneousData.slice(0, 4);
  const [firstChicken, twoChicken, threeChicken, fourChicken] = chickenData.slice(0, 4);
  const [firstDesserts, twoDesserts, threeDesserts, fourDesserts] = dessertsData.slice(0, 4);
  
 /* stary kod
   const firstBreakfast = breakfastData.length > 0 ? breakfastData[0] : null;
  const twoBreakfast = breakfastData.length > 0 ? breakfastData[1] : null;
  const threeBreakfast = breakfastData.length > 0 ? breakfastData[2] : null;
  const fourBreakfast = breakfastData.length > 0 ? breakfastData[3] : null;

  const firstMiscellaneous =
    miscellaneousData.length > 0 ? miscellaneousData[0] : null;
  const twoMiscellaneous =
    miscellaneousData.length > 0 ? miscellaneousData[1] : null;
  const threeMiscellaneous =
    miscellaneousData.length > 0 ? miscellaneousData[2] : null;
  const fourMiscellaneous =
    miscellaneousData.length > 0 ? miscellaneousData[3] : null;

  const firstChicken = chickenData.length > 0 ? chickenData[0] : null;
  const twoChicken = chickenData.length > 0 ? chickenData[1] : null;
  const threeChicken = chickenData.length > 0 ? chickenData[2] : null;
  const fourChicken = chickenData.length > 0 ? chickenData[3] : null;

  const firstDesserts = dessertsData.length > 0 ? dessertsData[0] : null;
  const twoDesserts = dessertsData.length > 0 ? dessertsData[1] : null;
  const threeDesserts = dessertsData.length > 0 ? dessertsData[2] : null;
  const fourDesserts = dessertsData.length > 0 ? dessertsData[3] : null; */

  return (
    <>
      {mobile && (
        <>
          <CategoriesListContainer>
            <CategoryElement>
              <CategoriesMobileSection>
                <CategoryBlock1>
                  <CategoryTitle>Breakfast</CategoryTitle>
                </CategoryBlock1>
                <CategoryBlock2>
                  <Block>
                    {firstBreakfast && (
                      <BlockPicture href={`/categories/${firstBreakfast._id}`}>
                        <BlockPictureImg
                          src={firstBreakfast.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstBreakfast.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/breakfast">See all</Button>
                  </Block>

                  <CategoryBlock1>
                    <CategoryTitle>Miscellaneous</CategoryTitle>
                  </CategoryBlock1>

                  <Block>
                    {firstMiscellaneous && (
                      <BlockPicture
                        href={`/categories/${firstMiscellaneous._id}`}
                      >
                        <BlockPictureImg
                          src={firstMiscellaneous.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstMiscellaneous.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/miscellaneous">See all</Button>
                  </Block>

                  <CategoryBlock1>
                    <CategoryTitle>Chicken</CategoryTitle>
                  </CategoryBlock1>

                  <Block>
                    {firstChicken && (
                      <BlockPicture href={`/categories/${firstChicken._id}`}>
                        <BlockPictureImg
                          src={firstChicken.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstChicken.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/chicken">See all</Button>
                  </Block>

                  <CategoryBlock1>
                    <CategoryTitle>desserts</CategoryTitle>
                  </CategoryBlock1>

                  <Block>
                    {firstDesserts && (
                      <BlockPicture href={`/categories/${firstDesserts._id}`}>
                        <BlockPictureImg
                          src={firstDesserts.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstDesserts.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/desserts">See all</Button>
                  </Block>
                </CategoryBlock2>
              </CategoriesMobileSection>
            </CategoryElement>
          </CategoriesListContainer>
        </>
      )}

      {tablet && (
        <>
          <CategoriesListContainer>
            <CategoryElement>
              <CategoryBlock1>
                <CategoryTitle>Breakfast</CategoryTitle>
              </CategoryBlock1>
              <CategoryBlock2>
                <CategoriesTabletSection>
                  <Block>
                    {firstBreakfast && (
                      <BlockPicture href={`/categories/${firstBreakfast._id}`}>
                        <BlockPictureImg
                          src={firstBreakfast.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstBreakfast.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoBreakfast && (
                      <BlockPicture href={`/categories/${twoBreakfast._id}`}>
                        <BlockPictureImg
                          src={twoBreakfast.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoBreakfast.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/breakfast">See all</Button>
                  </Block>
                </CategoriesTabletSection>

                <CategoryBlock1>
                  <CategoryTitle>Miscellaneous</CategoryTitle>
                </CategoryBlock1>

                <CategoriesTabletSection>
                  <Block>
                    {firstMiscellaneous && (
                      <BlockPicture
                        href={`/categories/${firstMiscellaneous._id}`}
                      >
                        <BlockPictureImg
                          src={firstMiscellaneous.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstMiscellaneous.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoMiscellaneous && (
                      <BlockPicture
                        href={`/categories/${twoMiscellaneous._id}`}
                      >
                        <BlockPictureImg
                          src={twoMiscellaneous.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoMiscellaneous.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/miscellaneous">See all</Button>
                  </Block>
                </CategoriesTabletSection>

                <CategoryBlock1>
                  <CategoryTitle>Chicken</CategoryTitle>
                </CategoryBlock1>

                <CategoriesTabletSection>
                  <Block>
                    {firstChicken && (
                      <BlockPicture href={`/categories/${firstChicken._id}`}>
                        <BlockPictureImg
                          src={firstChicken.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstChicken.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoChicken && (
                      <BlockPicture href={`/categories/${twoChicken._id}`}>
                        <BlockPictureImg src={twoChicken.thumb} alt="zdjecie" />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoChicken.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/chicken">See all</Button>
                  </Block>
                </CategoriesTabletSection>

                <CategoryBlock1>
                  <CategoryTitle>desserts</CategoryTitle>
                </CategoryBlock1>

                <CategoriesTabletSection>
                  <Block>
                    {firstDesserts && (
                      <BlockPicture href={`/categories/${firstDesserts._id}`}>
                        <BlockPictureImg
                          src={firstDesserts.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstDesserts.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoDesserts && (
                      <BlockPicture href={`/categories/${twoDesserts._id}`}>
                        <BlockPictureImg
                          src={twoDesserts.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoDesserts.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/desserts">See all</Button>
                  </Block>
                </CategoriesTabletSection>
              </CategoryBlock2>
            </CategoryElement>
          </CategoriesListContainer>
        </>
      )}

      {desktop && (
        <>
          <CategoriesListContainer>
            <CategoryElement>
              <CategoryBlock1>
                <CategoryTitle>Breakfast</CategoryTitle>
              </CategoryBlock1>
              <CategoryBlock2>
                <CategoriesDesktopSection>
                  <Block>
                    {firstBreakfast && (
                      <BlockPicture href={`/categories/${firstBreakfast._id}`}>
                        <BlockPictureImg
                          src={firstBreakfast.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstBreakfast.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoBreakfast && (
                      <BlockPicture href={`/categories/${twoBreakfast._id}`}>
                        <BlockPictureImg
                          src={twoBreakfast.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoBreakfast.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {threeBreakfast && (
                      <BlockPicture href={`/categories/${threeBreakfast._id}`}>
                        <BlockPictureImg
                          src={threeBreakfast.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {threeBreakfast.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {fourBreakfast && (
                      <BlockPicture href={`/categories/${fourBreakfast._id}`}>
                        <BlockPictureImg
                          src={fourBreakfast.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {fourBreakfast.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/breakfast">See all</Button>
                  </Block>
                </CategoriesDesktopSection>

                <CategoryBlock1>
                  <CategoryTitle>Miscellaneous</CategoryTitle>
                </CategoryBlock1>

                <CategoriesDesktopSection>
                  <Block>
                    {firstMiscellaneous && (
                      <BlockPicture
                        href={`/categories/${firstMiscellaneous._id}`}
                      >
                        <BlockPictureImg
                          src={firstMiscellaneous.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstMiscellaneous.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoMiscellaneous && (
                      <BlockPicture
                        href={`/categories/${twoMiscellaneous._id}`}
                      >
                        <BlockPictureImg
                          src={twoMiscellaneous.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoMiscellaneous.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {threeMiscellaneous && (
                      <BlockPicture
                        href={`/categories/${threeMiscellaneous._id}`}
                      >
                        <BlockPictureImg
                          src={threeMiscellaneous.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {threeMiscellaneous.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {fourMiscellaneous && (
                      <BlockPicture
                        href={`/categories/${fourMiscellaneous._id}`}
                      >
                        <BlockPictureImg
                          src={fourMiscellaneous.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {fourMiscellaneous.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/miscellaneous">See all</Button>
                  </Block>
                </CategoriesDesktopSection>

                <CategoryBlock1>
                  <CategoryTitle>Chicken</CategoryTitle>
                </CategoryBlock1>

                <CategoriesDesktopSection>
                  <Block>
                    {firstChicken && (
                      <BlockPicture href={`/categories/${firstChicken._id}`}>
                        <BlockPictureImg
                          src={firstChicken.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstChicken.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoChicken && (
                      <BlockPicture href={`/categories/${twoChicken._id}`}>
                        <BlockPictureImg src={twoChicken.thumb} alt="zdjecie" />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoChicken.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {threeChicken && (
                      <BlockPicture href={`/categories/${threeChicken._id}`}>
                        <BlockPictureImg
                          src={threeChicken.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {threeChicken.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {fourChicken && (
                      <BlockPicture href={`/categories/${fourChicken._id}`}>
                        <BlockPictureImg
                          src={fourChicken.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {fourChicken.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/chicken">See all</Button>
                  </Block>
                </CategoriesDesktopSection>

                <CategoryBlock1>
                  <CategoryTitle>desserts</CategoryTitle>
                </CategoryBlock1>
                <CategoriesDesktopSection>
                  <Block>
                    {firstDesserts && (
                      <BlockPicture href={`/categories/${firstDesserts._id}`}>
                        <BlockPictureImg
                          src={firstDesserts.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {firstDesserts.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {twoDesserts && (
                      <BlockPicture href={`/categories/${twoDesserts._id}`}>
                        <BlockPictureImg
                          src={twoDesserts.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {twoDesserts.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {threeDesserts && (
                      <BlockPicture href={`/categories/${threeDesserts._id}`}>
                        <BlockPictureImg
                          src={threeDesserts.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {threeDesserts.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}
                  </Block>

                  <Block>
                    {fourDesserts && (
                      <BlockPicture href={`/categories/${fourDesserts._id}`}>
                        <BlockPictureImg
                          src={fourDesserts.thumb}
                          alt="zdjecie"
                        />
                        <BlockPictureDescription>
                          <PictureDescription>
                            {fourDesserts.title}
                          </PictureDescription>
                        </BlockPictureDescription>
                      </BlockPicture>
                    )}

                    <Button href="/categories/desserts">See all</Button>
                  </Block>
                </CategoriesDesktopSection>
              </CategoryBlock2>
            </CategoryElement>
          </CategoriesListContainer>
        </>
      )}
    </>
  );
};

export default PreviewCategories;
