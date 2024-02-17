import React, { useEffect } from "react";
import MainPageTitle from "./MainPageTitle";
import IngredientsShoppingList from "./IngredientsShoppingList";
import { fetchShoppingList } from "../redux/shoppingListActions";

export const ShoppingListPage = () => {
  useEffect(() => {
    if (!fetchShoppingList) {
      fetchShoppingList();
    }
  }, []);

  return (
    <div>
      <MainPageTitle title="Shopping List" />
      <IngredientsShoppingList />
    </div>
  );
};
