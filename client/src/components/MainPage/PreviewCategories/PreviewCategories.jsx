import {
  Block,
  BlockPicture,
  BlockPictureDescription,
  PictureDescription,
  Button,
  BlockPictureImg,
} from "./PreviewCategories.styled";
import { useState, useEffect } from "react";

const PreviewCategories = ({
  pictureDescription,
  button,
  breakfast,
  miscellaneous,
  chicken,
  desserts,
}) => {
  const [breakfastData, setBreakfastData] = useState([]);
  const [miscellaneousData, setMiscellaneousData] = useState([]);
  const [chickenData, setChickenData] = useState([]);
  const [dessertsData, setDessertsData] = useState([]);

  // do poprawy

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
  const fourDesserts = dessertsData.length > 0 ? dessertsData[3] : null;

  if (breakfast === 1) {
    return (
      <Block>
        {firstBreakfast && (
          <BlockPicture>
            <BlockPictureImg src={firstBreakfast.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{firstBreakfast.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (breakfast === 2) {
    return (
      <Block>
        {twoBreakfast && (
          <BlockPicture>
            <BlockPictureImg src={twoBreakfast.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{twoBreakfast.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (breakfast === 3) {
    return (
      <Block>
        {threeBreakfast && (
          <BlockPicture>
            <BlockPictureImg src={threeBreakfast.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{threeBreakfast.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (breakfast === 4) {
    return (
      <Block>
        {fourBreakfast && (
          <BlockPicture>
            <BlockPictureImg src={fourBreakfast.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{fourBreakfast.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (miscellaneous === 1) {
    return (
      <Block>
        {firstMiscellaneous && (
          <BlockPicture>
            <BlockPictureImg src={firstMiscellaneous.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>
                {firstMiscellaneous.title}
              </PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (miscellaneous === 2) {
    return (
      <Block>
        {twoMiscellaneous && (
          <BlockPicture>
            <BlockPictureImg src={twoMiscellaneous.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{twoMiscellaneous.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (miscellaneous === 3) {
    return (
      <Block>
        {threeMiscellaneous && (
          <BlockPicture>
            <BlockPictureImg src={threeMiscellaneous.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>
                {threeMiscellaneous.title}
              </PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (miscellaneous === 4) {
    return (
      <Block>
        {fourMiscellaneous && (
          <BlockPicture>
            <BlockPictureImg src={fourMiscellaneous.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{fourMiscellaneous.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (chicken === 1) {
    return (
      <Block>
        {firstChicken && (
          <BlockPicture>
            <BlockPictureImg src={firstChicken.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{firstChicken.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (chicken === 2) {
    return (
      <Block>
        {twoChicken && (
          <BlockPicture>
            <BlockPictureImg src={twoChicken.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{twoChicken.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (chicken === 3) {
    return (
      <Block>
        {threeChicken && (
          <BlockPicture>
            <BlockPictureImg src={threeChicken.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{threeChicken.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (chicken === 4) {
    return (
      <Block>
        {fourChicken && (
          <BlockPicture>
            <BlockPictureImg src={fourChicken.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{fourChicken.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (desserts === 1) {
    return (
      <Block>
        {firstDesserts && (
          <BlockPicture>
            <BlockPictureImg src={firstDesserts.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{firstDesserts.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (desserts === 2) {
    return (
      <Block>
        {twoDesserts && (
          <BlockPicture>
            <BlockPictureImg src={twoDesserts.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{twoDesserts.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (desserts === 3) {
    return (
      <Block>
        {threeDesserts && (
          <BlockPicture>
            <BlockPictureImg src={threeDesserts.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{threeDesserts.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  if (desserts === 4) {
    return (
      <Block>
        {fourDesserts && (
          <BlockPicture>
            <BlockPictureImg src={fourDesserts.thumb} alt="zdjecie" />
            <BlockPictureDescription>
              <PictureDescription>{fourDesserts.title}</PictureDescription>
            </BlockPictureDescription>
          </BlockPicture>
        )}

        {button && <Button>See all</Button>}
      </Block>
    );
  }

  return <></>;
};

export default PreviewCategories;
