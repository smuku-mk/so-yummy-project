import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
// import { Header } from "../Header";
import { Footer } from "../Footer";

export const SharedLayout = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};

export const SharedLayoutTest = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
