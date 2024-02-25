import { Link } from 'react-router-dom';
import svg from '../../images/sprites.svg'

import {
  CardWrapper,
  CardImg,
  CardTextWrapper,
  CardTitle,
  CardDescription,
  CardTime,
  CardButtonSee,
  CardButtonDelete,
  CardIcon,
} from './FavoriteItem.styled';

export const FavoriteItem = ({ recipe, location, removeFavorite }) => {
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
          removeFavorite(recipeId);
        }}
      >
        <CardIcon>
        <svg>
          <use xlinkHref={`${svg}#icon-trash`} />
          </svg>
        </CardIcon>
      </CardButtonDelete>
    </CardWrapper>
  );
}
