import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../../redux/categories/operations";
import { recipes, currentCategory } from "../../../redux/categories/selectors";
import { Container, RecipesList, PictureDiv, PictureImg, PictureDescription } from "./RecipeList.styled";

export const RecipeList = () => {
  const dispatch = useDispatch();
  const recipesList = useSelector(recipes);
  const category = useSelector(currentCategory);

  useEffect(() => {
    dispatch(fetchRecipes(category));
  }, [dispatch, category]);

  return (
    <Container>
      <RecipesList>
        {recipesList &&
          recipesList.map((recipe, index) => (
            <li key={index}>
              <PictureDiv>
                <PictureImg src={recipe.thumb} alt={recipe.title} />
                <PictureDescription>
                  <p>{recipe.title}</p>
                </PictureDescription>
              </PictureDiv>
            </li>
          ))}
      </RecipesList>
    </Container>
  );
};
