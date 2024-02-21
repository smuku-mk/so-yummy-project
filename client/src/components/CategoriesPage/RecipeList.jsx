import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 32px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    gap: 32px;
    margin-bottom: 200px;
  }
`;

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
