// import { Link } from "react-router-dom";
import { Container, Title, Text, Register, Signin } from "./WelcomePage.styled";

export const WelcomePage = () => {
  return (
    <Container>
      <Title>Welcome to the app!</Title>
      <Text>
        This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook.
        You can easily save and retrieve your own recipes at any time.
      </Text>
      <Register to="/register">Registration</Register>
      <Signin to="/signin">Sign in</Signin>
    </Container>
  );
};
