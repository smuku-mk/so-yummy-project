import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAvatarURL, selectUserName } from "../../../../redux/auth/selectors";
import { Avatar, Container, Name } from "./UserLogo.styled";
import { UserLogoModal } from "../UserLogoModal";
import { userLogoModal, logOutModal } from "../../../../redux/userModal/selectors";
import { toggleUserLogoModal, resetModals } from "../../../../redux/userModal/userModalSlice";
import { LogoutBtn } from "../LogoutBtn";

export const UserLogo = () => {

  const dispatch = useDispatch();
  const avatarURL = useSelector(selectAvatarURL);
  const userName = useSelector(selectUserName);
  const isUserLogoModalOpen = useSelector(userLogoModal);
  const isLogOutModalOpen = useSelector(logOutModal);


  const handleModalClick = () => {
    dispatch(toggleUserLogoModal());
  };

  useEffect(() => {
    dispatch(resetModals());
  }, [dispatch]);

  return (
    <Container onClick={handleModalClick}>
      <Avatar src={`${avatarURL}`} alt="avatar" ></Avatar>
      <Name>{userName}</Name>
      {isUserLogoModalOpen && <UserLogoModal />}
      {isLogOutModalOpen && <LogoutBtn />}
    </Container>
  );
};
