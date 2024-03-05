import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Block,
  BlockPicture,
  BlockPictureImg,
  BlockPictureDescription,
  PictureDescription,
  RecipesListContainer,
  RecipesElement,
  RecipesNoResults,
  RecipesNoImg,
} from "./SearchRecipesList.styled.jsx";
import { clearSearchResults } from "../../../redux/search/operations.js";

export const SearchRecipesList = () => {
  const recipes = useSelector((state) => state.search.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSearchResults());
    };
  }, [dispatch]);

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
        <RecipesNoResults>
          <RecipesNoImg />
          <p>Try looking for something else..</p>
        </RecipesNoResults>
      )}
    </>
  );
};
