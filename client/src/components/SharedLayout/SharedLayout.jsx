import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { currentUser } from "../../redux/auth/operations";
import { Header } from "../Header";
import { Footer } from "../Footer";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const SharedLayout = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
// console.log('isLoggedIn', isLoggedIn)
  return (
    <Container>
      <Header />
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
