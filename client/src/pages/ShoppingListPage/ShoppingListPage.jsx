import { MainPageTitle } from "../../components/IngredientsShoppingList/IngredientsShoppingList.styled";
import { IngredientsShoppingList } from "../../components/IngredientsShoppingList/IngredientsShoppingList";
import { GlobalContainer } from "../../styles";

export const ShoppingListPage = () => {
  return (
    <div>
      <GlobalContainer>
        <MainPageTitle>Shopping List</MainPageTitle>
        <IngredientsShoppingList />
      </GlobalContainer>
    </div>
  );
};
