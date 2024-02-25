import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import { Children } from 'react';
import queryBackEnd from '../../components/Request/queryBackEnd';
import { Container, Pagination, Stack } from '@mui/material';
import { PaginationWrapper, ImgWrapper, ImgTitle, Title, ContainerTitle } from './FavoritePage.styled';
import instanceBackEnd from '../../components/Request/RequestBackEnd';
import empty_mobile from '../../images/mobile_img/searchfor_mobile.png';
import empty_tablet from '../../images/tablet_img/searchfor_tablet.png';
import { MainContainer } from '../../components/MainContainer/MainContainer';

export const FavoritePage = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPage, setAllPage] = useState();
  const [allItem, setAllItem] = useState();

  useEffect(() => {
    const data = queryBackEnd.queryAllFavorite();
    data
      .then((results) => {
        setRecipes(results.result.data.list);
        setAllItem(results.result.data.totalItem);
        const pageQty = Math.ceil(results.result.data.totalItem / 4);
        setAllPage(pageQty);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const changeNum = (_, num) => {
    setCurrentPage(num);
    instanceBackEnd
      .get(`/favorite?page=${num}`)
      .then((response) => setRecipes(response.data.result.data.list))
      .catch((error) => console.log(error.message));
  };

  const removeFavorite = recipeId => {
    const lastItem = allItem % 4;
    let pageBack;
    if (currentPage !== 1 || lastItem === 1) {
      pageBack = currentPage - 1;
    } else pageBack = currentPage;
    instanceBackEnd
      .patch(`/favorite/remove?page=${pageBack}`, { recipe: `${recipeId}` })
      .then(res => {
        const list = res.data.result.data.list;
        setRecipes(list);
        const totalItem = res.data.result.data.totalItem;
        setAllItem(totalItem);
        const quantity = Math.ceil(totalItem / 4);
        setAllPage(quantity);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <MainContainer>
        <ContainerTitle>
    <Title>Favorite</Title>
  </ContainerTitle>
      {recipes.length !== 0 ? (
        <FavoriteList
          recipes={recipes}
          allItem={allItem}
          location={location}
          removeFavorite={removeFavorite}
        >
          {Children}
        </FavoriteList>
      ) : (
        <ImgWrapper>
                <picture>
          <img
            src={empty_mobile}
            srcSet={`${empty_mobile}`}
            alt="Empty list"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${empty_tablet}`}
          />
        </picture>
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
                sx={{ marginY: 3, marginX: 'auto' }}
              />
            )}
          </Stack>
        </Container>
      </PaginationWrapper>
    </MainContainer>
  );
};
