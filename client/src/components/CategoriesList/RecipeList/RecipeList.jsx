import { StyledDiv } from "./RecipeList.styled";

export const RecipeList = ({ recipes }) => {
  return (
    <StyledDiv>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </StyledDiv>
  );
};
