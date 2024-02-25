import { Avatar, Container, Name } from "./UserLogo.styled";
import photo from "./photo.jpeg";

export const UserLogo = () => {
  return (
    <Container>
      <Avatar src={`${photo}`} alt="avatar"></Avatar>
      <Name>Olena</Name>
    </Container>
  );
};
