import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import svg from "../../images/sprites.svg";
import {
  removeIngredient,
  fetchShoppingList,
} from "../../redux/shopping-list/shoppingListActions";
import {
  ListWrapper,
  ListHead,
  ListItem,
  ListTitle,
  ListAmount,
  ListRemoveButton,
  ListImage,
  ListSpanProducts,
  ListSpanRemove,
  ListSpanNumber,
  ListNav,
} from "./IngredientsShoppingList.styled";

export const IngredientsShoppingList = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  const handleRemoveIngredient = (ingredientId) => {
    dispatch(removeIngredient(ingredientId));
  };

  return (
    <ListWrapper>
      <ListNav>
        <ListHead>
          <ListSpanProducts>Products</ListSpanProducts>
          <ListSpanNumber>Number</ListSpanNumber>
          <ListSpanRemove>Remove</ListSpanRemove>
        </ListHead>
      </ListNav>
      <ul>
        {ingredients &&
          ingredients.map((ingredient) => (
            <ListItem key={ingredient.id}>
              <ListImage src={ingredient.thb} alt={ingredient.ttl} />
              <ListTitle>{ingredient.ttl}</ListTitle>
              <div>
                <ListAmount>
                  {ingredient.amount} {ingredient.unit}
                </ListAmount>
              </div>
              <div>
                <ListRemoveButton
                  onClick={() => handleRemoveIngredient(ingredient.id)}>
                  <svg width={14} height={14}>
                    <use xlinkHref={`${svg}#icon-x`} />
                  </svg>
                </ListRemoveButton>
              </div>
            </ListItem>
          ))}
      </ul>
    </ListWrapper>
  );
};
