import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeIngredient,
  fetchShoppingList,
} from "../redux/shoppingListActions";
import styled from "styled-components";

export const IngredientsShoppingList = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  const handleRemoveIngredient = (ingredientId) => {
    dispatch(removeIngredient(ingredientId));
  };

  const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  const ListHead = styled.h1`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    margin-bottom: 1rem;
    width: 90%;
    height: 40px;
    color: var(--white);
    background-color: var(--brand);
    border-radius: 5px;
  `;

  const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    max-width: 100%;
  `;

  const Image = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    background-color: var(--mediaBg);
    border-radius: 5px;
  `;

  const Title = styled.span`
    text-align: top;
    font-size: 10px;
  `;

  const Amount = styled.span`
    margin-left: auto;
    width: 40px;
    height: 20px;
    background-color: var(--brand);
  `;

  const RemoveButton = styled.button`
    color: var(--black);
    border: none;
    cursor: pointer;
  `;

  return (
    <div>
      <ListWrapper>
        <ListHead>
          <span>Products</span>
          <span>Number</span>
          <span>Remove</span>
        </ListHead>
      </ListWrapper>
      <ul>
        {ingredients &&
          ingredients.map((ingredient) => (
            <ListItem key={ingredient.id}>
              <Image src={ingredient.thb} alt={ingredient.ttl} />
              <div>
                <Title>{ingredient.ttl}</Title>
                <Amount>
                  {ingredient.amount} {ingredient.unit}
                </Amount>
              </div>
              <RemoveButton
                onClick={() => handleRemoveIngredient(ingredient.id)}>
                X
              </RemoveButton>
            </ListItem>
          ))}
      </ul>
    </div>
  );
};
