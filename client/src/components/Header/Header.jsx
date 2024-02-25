import { Container, Wrapper } from "./Header.styled";
import { Logo, Navigation, UserLogo } from "./header-components";
import { ThemeToggler } from "./header-components/ThemeToggler/ThemeToggler";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <UserLogo />
        {/* <Navigation /> */}
        <ThemeToggler />
      </Wrapper>
    </Container>
  );
};
