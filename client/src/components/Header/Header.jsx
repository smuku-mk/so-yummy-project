import { Container, Wrapper } from "./Header.styled";
import { Logo, UserLogo, Nav, Hamburger } from "./header-components";
import { ThemeToggler } from "./header-components/ThemeToggler/ThemeToggler";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Nav />
        <UserLogo />
        <Hamburger />
        <ThemeToggler />
      </Wrapper>
    </Container>
  );
};
