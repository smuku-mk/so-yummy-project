import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { Form, Title, Label, Input, Submit, Icon } from "./RegisterForm.styled";
import sprites from "../../images/sprites.svg";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const logged = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(logged);
    form.reset();
    navigate("/");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Title>Registration</Title>
        <Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            autocomplete="off"
          />
          <Icon>
            <use xlinkHref={`${sprites}#icon-user`} />
          </Icon>
        </Label>
        <Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autocomplete="off"
          />
          <Icon>
            <use xlinkHref={`${sprites}#icon-email`} />
          </Icon>
        </Label>
        <Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="off"
          />
          <Icon>
            <use xlinkHref={`${sprites}#icon-password`} />
          </Icon>
        </Label>
        <Submit type="submit">Sign up</Submit>
      </Form>
    </div>
  );
};
