import { useState, useEffect } from "react";
import { BgContainer, Content, Wrapper } from "./Header.styled";
import { Logo, UserLogo, Hamburger, Navi } from "./header-components";
import { ThemeToggler } from "./header-components/ThemeToggler/ThemeToggler";
import { GlobalContainer } from "../../styles";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNav(window.scrollY >= 67);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BgContainer variant={nav}>
      <GlobalContainer>
        <Content>
          <Logo />
          <Navi />
          <Wrapper>
            <UserLogo />
            <Hamburger />
            {windowWidth >= 1440 ? <ThemeToggler /> : null}
          </Wrapper>
        </Content>
      </GlobalContainer>
    </BgContainer>
  );
};
