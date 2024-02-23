import React, { useEffect } from "react";
// import MainPageTitle from "./MainPageTitle";
import { IngredientsShoppingList } from "../../components/IngredientsShoppingList/IngredientsShoppingList";
import { fetchShoppingList } from "../../redux/shopping-list/shoppingListActions";
import { useSelector, useDispatch } from "react-redux";

export const ShoppingListPage = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ingredients || ingredients.length === 0) {
      dispatch(fetchShoppingList());
    }
  }, [ingredients, dispatch]);

  return (
    <div>
      {/* <MainPageTitle title="Shopping List" /> */}
      <IngredientsShoppingList />
    </div>
  );
};
