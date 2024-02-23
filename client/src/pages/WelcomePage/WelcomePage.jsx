import { Link } from "react-router-dom";
import { Container, Title, Text, Register, Signin } from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <Container>
      <Title>Welcome to the app!</Title>
      <Text>
        This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook.
        You can easily save and retrieve your own recipes at any time.
      </Text>
      <Link to={"/register"}>Registration</Link>
      <Link to={"/signin"}>Sign in</Link>
    </Container>
  );
};
export default WelcomePage;