import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/auth/operations";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { UserInfoModal } from "../Header/header-components/UserInfoModal/UserInfoModal";

export const SharedLayoutPrivate = () => {
  const dispatch = useDispatch();
  const isProfileModalOpen = useSelector((state) => state.userModal.isProfileModalOpen);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);


  return (
    <>
      <Header />
      {isProfileModalOpen && < UserInfoModal/>}
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
