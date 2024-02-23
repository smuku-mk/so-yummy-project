import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, MainContent } from "./SharedLayout.styled";
// import { Header } from "../Header";
import { Footer } from "../Footer";

export const SharedLayout = ({children}) => {
  return (
    <Container>
      {/* <Header /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <MainContent>{children}</MainContent>
      </Suspense>
      <Footer />
    </Container>
  );
};
