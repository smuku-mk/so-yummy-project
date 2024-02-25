import React from 'react';
import { useSelector } from 'react-redux';

export const SearchRecipesList = () => {

  const recipes = useSelector((state) => state.search.recipes);

  return (
    <div>
      {recipes && recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      ) : (
        <p>Try looking for something else..</p>
      )}
    </div>
  );
};