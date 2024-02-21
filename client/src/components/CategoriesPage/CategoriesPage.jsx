import React, { useState, useEffect } from "react";
import { getCategoryPage } from "../api";
import RecipeList from "./RecipeList";
import {
  TabsContainer,
  ScrollButton,
  StyledSvg,
  StyledSpan,
  CategoryList,
  CategoryItem,
  ErrorMessage,
  Header,
} from "./CategoriesPage.styled";
import ErrorMessage from "./ErrorMessage";

const CategoriesPage = () => {
  const [category, setCategory] = useState("Beef");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { recipes: fetchedRecipes, totalCount } = await getCategoryPage(
        category,
        0,
        8
      );
      setRecipes(fetchedRecipes);
      setError(null);
    } catch (error) {
      setError(error.message);
      setRecipes([]);
    }
    setLoading(false);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Header>Categories</Header>
      <TabsContainer>
        <ScrollButton disabled>
          <StyledSvg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <CustomPath d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          </StyledSvg>
          <StyledSpan></StyledSpan>
        </ScrollButton>
        <CategoryList>
          <CategoryItem onClick={() => handleCategoryChange("Beef")}>
            Beef
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Breakfast")}>
            Breakfast
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Chicken")}>
            Chicken
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Dessert")}>
            Dessert
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Goat")}>
            Goat
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Lamb")}>
            Lamb
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Miscellaneous")}>
            Miscellaneous
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Pasta")}>
            Pasta
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Pork")}>
            Pork
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Seafood")}>
            Seafood
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Side")}>
            Side
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Starter")}>
            Starter
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Vegan")}>
            Vegan
          </CategoryItem>
          <CategoryItem onClick={() => handleCategoryChange("Vegetarian")}>
            Vegetarian
          </CategoryItem>
        </CategoryList>
        <ScrollButton>
          <StyledSvg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <CustomPath d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          </StyledSvg>
          <StyledSpan></StyledSpan>
        </ScrollButton>
      </TabsContainer>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
};

export default CategoriesPage;
