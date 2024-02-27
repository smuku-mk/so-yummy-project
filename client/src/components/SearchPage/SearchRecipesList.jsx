import React from "react";
import { useSelector } from "react-redux";
import {
  SearchRecipesWrapper,
  SearchImgWrapper,
  SearchImg,
  SearchRecipesTitle,
  SearchRecipesLi,
} from "./SearchPage.styled";

export const SearchRecipesList = () => {
  const recipes = useSelector((state) => state.search.recipes);

  return (
    <SearchRecipesWrapper>
      {recipes && recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <SearchRecipesLi key={index}>
              <SearchImgWrapper>
                <SearchImg src={recipe.thumb} alt={recipe.description} />
                <SearchRecipesTitle>{recipe.title}</SearchRecipesTitle>
              </SearchImgWrapper>
            </SearchRecipesLi>
          ))}
        </ul>
      ) : (
        <p>Try looking for something else..</p>
      )}
    </SearchRecipesWrapper>
  );
};
