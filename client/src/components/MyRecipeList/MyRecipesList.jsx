import React from 'react';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import { ListWrapper } from './MyRecipesList.styled';

const MyRecipesList = ({ recipes, location, removeOwnRecipe }) => {
  return (
    <>
      <ListWrapper>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <MyRecipesItem
              recipe={recipe}
              location={location}
              removeOwnRecipe={removeOwnRecipe}
            />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};

export default MyRecipesList;
