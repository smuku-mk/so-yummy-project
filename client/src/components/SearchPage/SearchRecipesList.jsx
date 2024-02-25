import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const SearchRecipesList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get("q");
  const searchType = queryParams.get("type");

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async ({ title, ingredient_name }) => {
      try {
        let response;
        if (searchType === "title") {
          response = await fetch(`http://localhost:5000/search?title=${title}`);
        } else if (searchType === "ingredient") {
          response = await fetch(
            `http://localhost:5000/ingredient?name=${ingredient_name}`
          );
        }

        const data = await response.json();
        setRecipes(data);
        setError(null);
      } catch (error) {
        setRecipes([]);
        setError("Error fetching recipes");
      }
    };

    if (searchValue && searchType) {
      fetchRecipes();
    } else {
      setRecipes([]);
      setError(null);
    }
  }, [searchValue, searchType]);

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
