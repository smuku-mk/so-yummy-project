import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { MainPageTitle } from 'locationMainPageTitle';
// import { MainContainer } from 'location/MainContainer';
import MyRecipesList from "../../components/MyRecipeList/MyRecipesList";
import { Children } from "react";
import { queryBackEnd } from "../../components/Request/queryBackEnd";
import { Container, Pagination, Stack } from "@mui/material";
import { PaginationWrapper, ImgWrapper, ImgTitle } from "../MyRecipePage/MyRecipesPage.styled";
import instanceBackEnd from '../../components/Request/RequestBackEnd';
// import imgIngradients from 'locationOfingradients.png';

const MyRecipesPage = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPage, setAllPage] = useState();
  const [allItem, setAllItem] = useState();

  useEffect(() => {
    setRecipes([]);
    const data = queryBackEnd.queryOwnRecipes();
    data
      .then((results) => {
        setRecipes(results.result.data.list);
        setAllItem(results.result.data.totalItem);
        const pageQty = Math.ceil(results.result.data.totalItem / 4);
        setAllPage(pageQty);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeNum = (_, num) => {
    setCurrentPage(num);
    instanceBackEnd
      .get(`/ownRecipes?page=${num}`)
      .then((response) => setRecipes(response.data.result.data.list))
      .catch((error) => {
        console.log(error.message);
      });
  };

  const removeOwnRecipe = (recipeId) => {
    const lastItem = allItem % 4;
    let pageBack;
    if (currentPage !== 1 || lastItem === 1) {
      pageBack = currentPage - 1;
    } else pageBack = currentPage;
    instanceBackEnd
      .delete(`/ownRecipes/${recipeId}?page=${pageBack}`)
      .then((res) => {
        const list = res.data.result.list;
        setRecipes(list);
        const totalItem = res.data.result.totalItem;
        setAllItem(totalItem);
        const quantity = Math.ceil(totalItem / 4);
        setAllPage(quantity);
      })
      .catch((error) => {
        console.log(error.message);
        setRecipes([]);
      });
  };
  return (
    <MainContainer>
      <MainPageTitle title={"My recipes"} />
      {recipes.length !== 0 ? (
        <MyRecipesList recipes={recipes} location={location} removeOwnRecipe={removeOwnRecipe}>
          {Children}
        </MyRecipesList>
      ) : (
        <ImgWrapper>
          <img src={imgIngradients} alt={"Empty list"} />
          <ImgTitle>The list is empty</ImgTitle>
        </ImgWrapper>
      )}
      <PaginationWrapper>
        <Container>
          <Stack spacing={2}>
            {allPage > 1 && (
              <Pagination
                count={allPage}
                page={currentPage}
                onChange={changeNum}
                siblingCount={1}
                sx={{ marginY: 3, marginX: "auto" }}
              />
            )}
          </Stack>
        </Container>
      </PaginationWrapper>
    </MainContainer>
  );
};

export default MyRecipesPage;
