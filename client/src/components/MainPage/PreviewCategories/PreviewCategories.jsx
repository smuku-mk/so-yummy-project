import {
  Block,
  BlockPicture,
  BlockPictureDescription,
  PictureDescription,
  Button,
} from "./PreviewCategories.styled";
import { useState, useEffect } from "react";

const PreviewCategories = ({ pictureDescription, button }) => {
  const [categories, setCategories] = useState([]);

  // do poprawy

  useEffect(() => {
    fetch("/recipes/main-page")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  return (
    <Block>
      <BlockPicture>
        <BlockPictureDescription>
          <PictureDescription>{pictureDescription}</PictureDescription>
        </BlockPictureDescription>
      </BlockPicture>
      {button && <Button>See all</Button>}
    </Block>
  );
};

export default PreviewCategories;
