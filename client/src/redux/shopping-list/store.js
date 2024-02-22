import { configureStore } from "@reduxjs/toolkit";
import { shoppingListReducer } from "./shoppingListSlice";

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});
