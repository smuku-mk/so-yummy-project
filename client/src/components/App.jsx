import React from "react";
import { SearchPage } from "./SearchPage";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
    </Routes>
  );
};
