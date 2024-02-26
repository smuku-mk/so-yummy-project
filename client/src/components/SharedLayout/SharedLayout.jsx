import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/auth/operations";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const SharedLayoutPrivate = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export const SharedLayoutRestricted = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
