import { combineReducers } from "redux";
import { authReducer } from "./auth/authSlice";
import { shoppingListReducer } from "./shopping-list/shoppingListSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  shoppingList: shoppingListReducer,
});

export default rootReducer;
