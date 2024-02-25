import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchTypeSelector } from "./SearchTypeSelector";
export const SearchBar = () => {

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
  useEffect(() => {
      if (searchValue && searchType) {
      fetchRecipes({ title: searchValue, ingredient_name: searchValue });
    } else {
      setRecipes([]);
      setError(null);
    }
  }, [searchValue, searchType]);

  return (
    <>
      <SearchForm />
      <SearchTypeSelector />
    </>
  );
};
