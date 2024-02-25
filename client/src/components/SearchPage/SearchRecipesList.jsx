import React, { useEffect, useState } from "react";


export const SearchRecipesList = () => {
  const location = useLocation();
  
  

  

  

  return (
    <div>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      ) : (
        <p>Try looking for something else..</p>
      )}
    </div>
  );
};
