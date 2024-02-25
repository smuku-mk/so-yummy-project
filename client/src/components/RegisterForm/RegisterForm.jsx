import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Title,
  Label,
  Input,
  Submit,
  Icon,
  RedIcon,
  GreenIcon,
  OrangeIcon,
  WarningMsg,
  SuccessMsg,
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
    const validCharacters = /^[a-zA-Z0-9]*$/;
    return !validCharacters.test(value);
  };

  const validatePassword = (value) => {
    return value.length < 6;
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
            autoComplete="off"
            validation={validation.name}
            onChange={inputChange}
            valid={!validateName(validation.name)}
          />
          <Icon>
            <use xlinkHref={`${sprites}#icon-user`} />
          </Icon>
          {validation.name && validateName(validation.name) ? (
            <GreenIcon>
              <use xlinkHref={`${sprites}#icon-success`} />
            </GreenIcon>
          ) : (
            <RedIcon>
              <use xlinkHref={`${sprites}#icon-error`} />
            </RedIcon>
          )}
        </Label>
        <Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
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
            autoComplete="off"
            validation={validation.password}
            onChange={inputChange}
            valid={!validatePassword(validation.password)}
          />
          <Icon>
            <use xlinkHref={`${sprites}#icon-password`} />
          </Icon>
          {validation.password && validatePassword(validation.password) ? (
            <OrangeIcon>
              <use xlinkHref={`${sprites}#icon-warning`} />
            </OrangeIcon>
          ) : (
            <GreenIcon>
              <use xlinkHref={`${sprites}#icon-success`} />
            </GreenIcon>
          )}
          {validation.password && validatePassword(validation.password) ? (
            <WarningMsg>Password is not secure</WarningMsg>
          ) : (
            <SuccessMsg>Password is secure</SuccessMsg>
          )}
        </Label>

        <Submit type="submit">Sign up</Submit>
      </Form>
    </div>
  );
};
