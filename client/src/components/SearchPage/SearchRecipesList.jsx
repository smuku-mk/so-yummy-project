import React from "react";
import { useSelector } from "react-redux";
import {
  Block,
  BlockPicture,
  BlockPictureImg,
  BlockPictureDescription,
  PictureDescription,
  RecipesListContainer,
  RecipesElement,
} from "./SearchRecipesList.styled.jsx";

export const SearchRecipesList = () => {
  const recipes = useSelector((state) => state.search.recipes);

  return (
    <>
      {recipes && recipes.length > 0 ? (
        <RecipesListContainer>
          {recipes.map((recipe, index) => (
            <RecipesElement key={index}>
              <Block>
                <BlockPicture>
                  <BlockPictureImg src={recipe.thumb} alt={recipe.title} />
                  <BlockPictureDescription>
                    <PictureDescription>{recipe.title}</PictureDescription>
                  </BlockPictureDescription>
                </BlockPicture>
              </Block>
            </RecipesElement>
          ))}
        </RecipesListContainer>
      ) : (
        <p>Try looking for something else..</p>
      )}
    </>
  );
};
