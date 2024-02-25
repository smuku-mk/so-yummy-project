import { Container, Wrapper } from "./Header.styled";
import { Logo, Navigation, UserLogo } from "./header-components";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <UserLogo />
        <Navigation />
      </Wrapper>
    </Container>
  );
};
