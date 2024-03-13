import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAvatarURL, selectUserName } from "../../../../redux/auth/selectors";
import { Avatar, Container, Name } from "./UserLogo.styled";
import { UserLogoModal } from "../UserLogoModal";

export const UserLogo = () => {
  
  const [isUserModalOpen, setIsUserModalOpen] = useState(false); // zamienić na reduxowy state, selector i dispatch
  const avatarURL = useSelector(selectAvatarURL);
  const userName = useSelector(selectUserName);

  const handleModalClick = () => {
    setIsUserModalOpen(!isUserModalOpen); // dispatch
  };

  return (
    <Container>
      <Avatar src={`${avatarURL}`} alt="avatar" onClick={handleModalClick}></Avatar>
      <Name>{userName}</Name>
      {isUserModalOpen && <UserLogoModal />}
    </Container>
  );
};
