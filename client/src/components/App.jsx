import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";

const lazyLoad = (page) => lazy(() => import("../pages").then((module) => ({ default: module[page] })));
const WelcomePage = lazyLoad("WelcomePage");
const MyRecipesPage = lazyLoad("MyRecipesPage");
const FavoritePage = lazyLoad("FavoritePage");

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
