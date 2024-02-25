import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { Form, Title, Label, Input, Submit, Icon } from "./SigininForm.styled";
import sprites from "../../images/sprites.svg";

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
      <Form onSubmit={handleSubmit}>
        <Title>Sign In</Title>
        <Label>
          <Input id="email" type="email" name="email" placeholder="Email" autocomplete="off" />
          <Icon>
            <use xlinkHref={`${sprites}#icon-email`} />
          </Icon>
        </Label>
        <Label>
          <Input id="password" type="password" name="password" placeholder="Password" autocomplete="off" />
          <Icon>
            <use xlinkHref={`${sprites}#icon-password`} />
          </Icon>
        </Label>
        <Submit type="submit">Log In</Submit>
      </Form>
    </div>
  );
};
