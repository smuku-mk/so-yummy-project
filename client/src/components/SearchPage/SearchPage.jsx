import React, { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

export const SearchPage = () => {
  //fetchning recipes
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const generateUrl = (searchBy, searchTerm) => {
    const baseUrl = "http://localhost:5000";
    let url = "";

    if (searchBy === "Ingredients") {
      url = `${baseUrl}/ingredients?name=${encodeURIComponent(searchTerm)}`;
    } else if (searchBy === "Title") {
      url = `${baseUrl}/recipes/search?title=${encodeURIComponent(searchTerm)}`;
    }

    return url;
  };

  const fetchRecipes = async () => {
    const url = generateUrl(searchBy, searchTerm);
    console.log(`Fetching data from ${url}`);

    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (response.headers.get("content-type").includes("application/json")) {
        const data = await response.json();
        setRecipes(data);
      } else {
        throw new Error(
          `Expected JSON but received ${response.headers.get("content-type")}`
        );
      }
    } catch (error) {
      setError("Error fetching data");
      console.error("Error:", error);
    }
  };

  //event handler
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("Title");

  const handleSearchClick = () => {
    if (searchTerm !== "" && searchBy !== "") {
      fetchRecipes();
    }
  };

  //render
  return (
    <div style={{ padding: "1em" }}>
      <h1>Search</h1>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter the text"
          style={{ width: "100%", padding: "0.5em" }}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div>
        <label>
          Search By:
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="Ingredients">Ingredients</option>
            <option value="Title">Title</option>
          </select>
        </label>
      </div>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
