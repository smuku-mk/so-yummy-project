import { useState } from "react";
import { Container, Wrapper } from "./Header.styled";
import { Logo, UserLogo, Navi, Hamburger } from "./header-components";
import { ThemeToggler } from "./header-components/ThemeToggler/ThemeToggler";
import { GlobalContainer } from "../../styles";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <GlobalContainer>
      <Container>
        <Logo />
        {isOpen ? <Navi /> : ""}
        <Wrapper>
          <UserLogo />
          <Hamburger onClick={toggleMenu} />
          {isOpen ? <ThemeToggler /> : ""}
        </Wrapper>
      </Container>
    </GlobalContainer>
  );
};
