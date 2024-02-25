import { Route, Routes } from "react-router-dom";
import { SharedLayout, SharedLayoutTest } from "./SharedLayout";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const lazyLoad = (page) => lazy(() => import("../pages").then((module) => ({ default: module[page] })));
const WelcomePage = lazyLoad("WelcomePage");
const SigninPage = lazyLoad("SigninPage");
const RegisterPage = lazyLoad("RegisterPage");
const NotFoundPage = lazyLoad("NotFoundPage");
const MainPage = lazyLoad("MainPage");
const FavoritePage = lazyLoad("FavoritePage");
const MyRecipePage = lazyLoad("MyRecipePage");
const AddRecipePage = lazyLoad("AddRecipePage");

export const App = () => {
  const isAuthorized = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      {!isAuthorized ? (
        <Route path="/" element={<SharedLayoutTest />}>
          <Route index element={<WelcomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      ) : (
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/my" element={<MyRecipePage />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Route>
      )}
    </Routes>
  );
};
