import { useSelector } from "react-redux";
import { selectAvatarURL, selectUserName } from "../../../../redux/auth/selectors";
import { Avatar, Container, Name } from "./UserLogo.styled";

export const UserLogo = () => {
  const avatarURL = useSelector(selectAvatarURL);
  const userName = useSelector(selectUserName);

  return (
    <Container>
      <Avatar src={`${avatarURL}`} alt="avatar"></Avatar>
      <Name>{userName}</Name>
    </Container>
  );
};
