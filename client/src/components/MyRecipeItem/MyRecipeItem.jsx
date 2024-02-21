import React from 'react';
import { Link } from 'react-router-dom';
// import { svg } from 'svglocation';

import {
  CardWrapper,
  CardImg,
  CardTextWrapper,
  CardTitle,
  CardDescription,
  CardTime,
  CardButtonSee,
  CardButtonDelete,
  // CardIcon,
} from './MyRecipesItem.styled';

const MyRecipesItem = ({ recipe, location, removeOwnRecipe }) => {
  const recipeId = recipe._id;
  return (
    <CardWrapper>
      <CardImg src={recipe.imageUrl} alt={recipe.title} />
      <CardTextWrapper>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
        <CardTime>{recipe.time} min</CardTime>
      </CardTextWrapper>
      <Link to={`/recipe/${recipe._id}`} state={{ from: location }}>
        <CardButtonSee>See recipe</CardButtonSee>
      </Link>

      <CardButtonDelete
        type="button"
        onClick={() => {
          removeOwnRecipe(recipeId);
        }}
      >
        {/* <CardIcon>
          <UseSvg id="trashsvg" />
        </CardIcon> */}
      </CardButtonDelete>
    </CardWrapper>
  );
};

export default MyRecipesItem;
