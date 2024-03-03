import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../../../redux/categories/operations'
import { recipes, currentCategory } from '../../../../redux/categories/selectors'
import { StyledDiv } from "./RecipeList.styled";

export const RecipeList = () => {
  const dispatch = useDispatch();
  const recipesList = useSelector(recipes); 
  const category = useSelector(currentCategory)



  useEffect(() => {
    dispatch(fetchRecipes(category));
  }, [dispatch, category]);

  return (
    <StyledDiv>
      <ul>
        {recipesList && recipesList.length > 0 ? (
          recipesList.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))
        ) : (
          <li>No recipes available</li>
        )}
      </ul>
    </StyledDiv>
  );
 }