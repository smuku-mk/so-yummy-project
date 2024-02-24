import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchPageWrapper } from "./SearchPage.styled";

export const SearchRecipesList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get("q");
  const searchType = queryParams.get("type");

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recipes based on searchValue and searchType
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `/api/recipes?search=${searchValue}&type=${searchType}`
        );
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
    <SearchPageWrapper>
      {error && <p>{error}</p>}
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      ) : (
        <p>Try looking for something else..</p>
      )}
    </SearchPageWrapper>
  );
};
