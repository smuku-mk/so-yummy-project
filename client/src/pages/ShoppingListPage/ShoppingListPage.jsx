// import { useEffect } from "react";
import { MainPageTitle } from "../../components/IngredientsShoppingList/IngredientsShoppingList.styled";
import { IngredientsShoppingList } from "../../components/IngredientsShoppingList/IngredientsShoppingList";
// import { fetchShoppingList } from "../../redux/shopping-list/shoppingListActions";
// import { useSelector, useDispatch } from "react-redux";
import { GlobalContainer } from "../../styles";

export const ShoppingListPage = () => {
  // const ingredients = useSelector((state) => state.shoppingList.ingredients);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!ingredients || ingredients.length === 0) {
  //     dispatch(fetchShoppingList());
  //   }
  // }, [ingredients, dispatch]);

  return (
    <div>
      <GlobalContainer>
        <MainPageTitle>Shopping List</MainPageTitle>
        <IngredientsShoppingList />
      </GlobalContainer>
    </div>
  );
};
