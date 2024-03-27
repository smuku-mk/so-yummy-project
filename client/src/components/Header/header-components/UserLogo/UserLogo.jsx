import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAvatarURL, selectUserName } from "../../../../redux/auth/selectors";
import { Avatar, Container, Name } from "./UserLogo.styled";
import { UserLogoModal } from "../UserLogoModal";
import { userModal, profileModal, logOutModal } from "../../../../redux/userModal/selectors";
import { toggleUserModal, resetModals } from "../../../../redux/userModal/userModalSlice";
import { UserInfoModal } from "../UserInfoModal";
import { LogoutBtn } from "../LogoutBtn";

export const UserLogo = () => {

  const dispatch = useDispatch();
  const avatarURL = useSelector(selectAvatarURL);
  const userName = useSelector(selectUserName);
  const isUserModalOpen = useSelector(userModal);
  const isLogutModalOpen = useSelector(logOutModal);
  console.log(avatarURL);


  const handleModalClick = () => {
    dispatch(toggleUserModal());
  };

  useEffect(() => {
    dispatch(resetModals());
  }, [dispatch]);

  return (
    <Container>
      <Avatar src={`${avatarURL}`} alt="avatar" onClick={handleModalClick}></Avatar>
      <Name>{userName}</Name>
      {isUserModalOpen && <UserLogoModal />}
      {isLogutModalOpen && <LogoutBtn />}
    </Container>
  );
};
