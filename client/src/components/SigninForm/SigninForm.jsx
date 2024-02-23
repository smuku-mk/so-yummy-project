import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Title,
  Label,
  InputContainer,
  Icon,
  Input,
  Submit,
  //Link,
} from "./SigininForm.styled";

export const SigninForm = () => {
  const dispatch = useDispatch();
  const logged = useSelector(selectIsLoggedIn);
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
    console.log(logged);
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
      <Link to="/register">Registration</Link>
    </div>
  );
};
