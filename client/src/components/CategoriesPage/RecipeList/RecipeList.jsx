import { StyledDiv } from "./RecipeList.styled";

const RecipeList = ({ recipes }) => {
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

export default RecipeList;
