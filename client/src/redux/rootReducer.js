import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';
import { shoppingListReducer } from './shopping-list/shoppingListSlice';
import { themeReducer } from './theme/themeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  shoppingList: shoppingListReducer,
  theme: themeReducer,
});

export default rootReducer;