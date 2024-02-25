import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Form,
  Title,
  Label,
  Input,
  Submit,
  Icon,
  RedIcon,
  GreenIcon,
} from "./RegisterForm.styled";
import sprites from "../../images/sprites.svg";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const logged = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const inputChange = (event) => {
    const { name, value } = event.target;
    setValidation({
      ...validation,
      [name]: value,
    });
  };

  const validateName = (value) => {
    const validCharacters = /[a-zA-Z0-9]/;
    return !validCharacters.test(value);
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
            validation={validation.name}
            onChange={inputChange}
            valid={validateName(validation.name)}
          />

          {validation.name && (
            <Icon
              validation={validateName(validation.name) ? "success" : "error"}
            >
              <use
                xlinkHref={`${sprites}#icon-success${
                  validateName(validation.name) ? "check" : "error"
                }`}
              />
            </Icon>
          )}
          {!validateName(validation.name) && (
            <RedIcon>
              <use xlinkHref={`${sprites}#icon-error`} />
            </RedIcon>
          )}

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
            validation={validation.email}
            onChange={inputChange}
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
            validation={validation.password}
            onChange={inputChange}
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
