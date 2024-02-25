import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { RegisterPageStyled, StyledLink } from "./RegisterPage.styled";

export const RegisterPage = () => {
  return (
    <RegisterPageStyled>
      <RegisterForm />
      <StyledLink to="/signin">Sign In</StyledLink>
    </RegisterPageStyled>
  );
};
