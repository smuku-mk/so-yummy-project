import { Route, Routes } from "react-router-dom";
import { SharedLayoutPrivate, SharedLayoutRestricted } from "./SharedLayout";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const lazyLoad = (page) =>
  lazy(() => import("../pages").then((module) => ({ default: module[page] })));
const WelcomePage = lazyLoad("WelcomePage");
const SigninPage = lazyLoad("SigninPage");
const RegisterPage = lazyLoad("RegisterPage");
const NotFoundPage = lazyLoad("NotFoundPage");
const MainPage = lazyLoad("MainPage");
const FavoritePage = lazyLoad("FavoritePage");
const MyRecipesPage = lazyLoad("MyRecipesPage");
const SearchPage = lazyLoad("SearchPage");
const AddRecipePage = lazyLoad("AddRecipePage");
const CategoriesPage = lazyLoad("CategoriesPage");
const ShoppingListPage = lazyLoad("ShoppingListPage");

export const App = () => {
  const isAuthorized = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      {isAuthorized ? (
        <Route path="/" element={<SharedLayoutRestricted />}>
          <Route index element={<WelcomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      ) : (
        <Route path="/" element={<SharedLayoutPrivate />}>
          <Route index element={<MainPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
        </Route>
      )}
    </Routes>
  );
};
