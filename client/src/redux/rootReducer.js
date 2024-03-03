import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';
import { shoppingListReducer } from './shopping-list/shoppingListSlice';
import { themeReducer } from './theme/themeSlice';
import { searchReducer } from "./search/searchSlice";
import { categoriesReducer } from './categories/categoriesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  shoppingList: shoppingListReducer,
  theme: themeReducer,
  search: searchReducer,
  categories: categoriesReducer
});

export default rootReducer;
