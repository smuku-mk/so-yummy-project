import { Route, Routes } from "react-router-dom";
import { SharedLayout, SharedLayoutTest } from "./SharedLayout";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useState, useEffect } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader';

const lazyLoad = (page) => lazy(() => import("../pages").then((module) => ({ default: module[page] })));
const WelcomePage = lazyLoad("WelcomePage");
const SigninPage = lazyLoad("SigninPage");
const RegisterPage = lazyLoad("RegisterPage");
const NotFoundPage = lazyLoad("NotFoundPage");
const MainPage = lazyLoad("MainPage");
const FavoritePage = lazyLoad("FavoritePage");
const MyRecipesPage = lazyLoad("MyRecipesPage");

export const App = () => {
  const isAuthorized = useSelector(selectIsLoggedIn);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Routes>
      {isAuthorized ? (
        loading ? (
          <PacmanLoader color={"#36d759"} loading={loading} size={100} />
        ) : (
          <Route path="/" element={<SharedLayoutTest />}>
            <Route index element={<WelcomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        )
      ) : (
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Route>
      )}
    </Routes>
  );
};