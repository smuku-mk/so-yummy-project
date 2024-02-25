import { combineReducers } from "redux";
import { authReducer } from "./auth/authSlice";
import { shoppingListReducer } from "./shopping-list/shoppingListSlice";
import { searchReducer } from "./search/searchSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  shoppingList: shoppingListReducer,
  search: searchReducer,
});

export default rootReducer;
