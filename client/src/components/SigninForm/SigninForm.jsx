import { useDispatch} from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { Form, Title, Label, InputContainer, Icon, Input, Submit, StyledLink } from "./SigininForm.styled";

export const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate("/");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Sign In</Title>
        <InputContainer>
          <Label>
            <Input type="email" name="email" placeholder="Email" />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <Icon></Icon>
            <Input type="password" name="password" placeholder="Password" />
          </Label>
        </InputContainer>
        <Submit type="submit">Log In</Submit>
      </Form>
      <StyledLink to="/register">Registration</StyledLink>
    </div>
  );
};
