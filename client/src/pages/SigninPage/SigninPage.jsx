import { SigninForm } from "../../components/SigninForm/SigninForm";
import { SigninPageStyled, StyledLink } from "./SigninPage.styled";

export const SigninPage = () => {
  return (
    <SigninPageStyled>
      <SigninForm />
      <StyledLink to="/register">Registration</StyledLink>
    </SigninPageStyled>
  );
};
