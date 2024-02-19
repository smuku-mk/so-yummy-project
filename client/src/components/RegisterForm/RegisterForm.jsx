import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Title,
  Label,
  Input,
  Submit,
  Link,
  InputContainer,
} from "./RegisterForm.styled";

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
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Registration</Title>
        <InputContainer>
          <Label>
            <Input type="text" name="name" placeholder="Name" />
          </Label>
          <Label>
            <Input type="email" name="email" placeholder="Email" />
          </Label>
          <Label>
            <Input type="password" name="password" placeholder="Password" />
          </Label>
        </InputContainer>
        <Submit type="submit">Register</Submit>
      </Form>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};
