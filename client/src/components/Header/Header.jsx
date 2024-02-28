import { useState, useEffect } from "react";
import { BgContainer, Content, Wrapper } from "./Header.styled";
import { Logo, UserLogo, Navi, Hamburger } from "./header-components";
import { ThemeToggler } from "./header-components/ThemeToggler/ThemeToggler";
import { GlobalContainer } from "../../styles";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNav(window.scrollY >= 67);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <BgContainer variant={nav}>
      <GlobalContainer>
        <Content>
          <Logo />
          {isOpen ? <Navi /> : ""}
          <Wrapper>
            <UserLogo />
            <Hamburger onClick={toggleMenu} />
            {isOpen ? <ThemeToggler /> : ""}
          </Wrapper>
        </Content>
      </GlobalContainer>
    </BgContainer>
  );
};
