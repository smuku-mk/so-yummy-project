import { Container, Title, Text, Register, Signin, Buttons, TextBox, Logo } from "./WelcomePage.styled";
import sprites from "../../images/sprites.svg";

export const WelcomePage = () => {
  return (
    <Container>
      <Logo>
        <use xlinkHref={`${sprites}#icon-logo`} />
      </Logo>
      <TextBox>
        <Title>Welcome to the app!</Title>
        <Text>
          This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook.
          You can easily save and retrieve your own recipes at any time.
        </Text>
      </TextBox>
      <Buttons>
        <Register to="/register">Registration</Register>
        <Signin to="/signin">Sign in</Signin>
      </Buttons>
    </Container>
  );
};
