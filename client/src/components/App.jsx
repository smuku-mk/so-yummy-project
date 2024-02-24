import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";

const lazyLoad = (page) =>
  lazy(() => import("../pages").then((module) => ({ default: module[page] })));
const WelcomePage = lazyLoad("WelcomePage");
const SigninPage = lazyLoad("SigninPage");
const RegisterPage = lazyLoad("RegisterPage");
const NotFoundPage = lazyLoad("NotFoundPage");
const SearchPage = lazyLoad("SearchPage");

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
