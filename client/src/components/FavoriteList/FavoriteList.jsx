import React from 'react';
import FavoriteItem from 'components/FaforiteItem/FavoriteItem';
import { ListWrapper } from './FavoriteList.styled';

const FavoriteList = ({ recipes, allItem, location, removeFavorite }) => {
  return (
    <>
      <ListWrapper>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <FavoriteItem
              recipe={recipe}
              allItem={allItem}
              location={location}
              removeFavorite={removeFavorite}
            />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};

export default FavoriteList;
