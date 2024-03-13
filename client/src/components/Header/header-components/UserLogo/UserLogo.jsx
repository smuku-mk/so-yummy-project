import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAvatarURL, selectUserName } from "../../../../redux/auth/selectors";
import { Avatar, Container, Name } from "./UserLogo.styled";
import { UserLogoModal } from "../UserLogoModal";
import { userModal } from "../../../../redux/userModal/selectors";
import { toggleUserModal, resetUserModal } from "../../../../redux/userModal/userModalSlice";


export const UserLogo = () => {

  const dispatch = useDispatch();
  const avatarURL = useSelector(selectAvatarURL);
  const userName = useSelector(selectUserName);
  const isUserModalOpen = useSelector(userModal);

  const handleModalClick = () => {
    dispatch(toggleUserModal());
  };
  useEffect(() => {
    dispatch(resetUserModal());
  }, [dispatch]);

  return (
    <Container>
      <Avatar src={`${avatarURL}`} alt="avatar" onClick={handleModalClick}></Avatar>
      <Name>{userName}</Name>
      {isUserModalOpen && <UserLogoModal />}
    </Container>
  );
};
