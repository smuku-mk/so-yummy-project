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
  OtherIcon,
  WarningMsg,
  SuccessMsg,
  ErrorMsg,
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

  const getBorderColor = (inputName) => {
    switch (inputName) {
      case "name":
        return validation.name
          ? validateName(validation.name)
            ? "#3cbc81"
            : "#e74a3b"
          : "rgba(255, 255, 255, 0.8)";
      case "password":
        return validation.password
          ? validatePassword(validation.password)
            ? "#3cbc81"
            : "#f6c23e"
          : "rgba(255, 255, 255, 0.8)";
      default:
        return "rgba(255, 255, 255, 0.8)";
    }
  };

  const getIconName = (inputName) => {
    switch (inputName) {
      case "name":
        return validation.name
          ? validateName(validation.name)
            ? "icon-success"
            : "icon-error"
          : "";
      case "password":
        return validation.password
          ? validatePassword(validation.password)
            ? "icon-success"
            : "icon-warning"
          : "";
      default:
        return "rgba(255, 255, 255, 0.8)";
    }
  };

  const validateName = (value) => {
    const validCharacters = /^[a-zA-Z0-9]*$/;
    return validCharacters.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 6;
  };

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
            style={{ borderColor: getBorderColor("name") }}
          />
          <Icon style={{ borderColor: getBorderColor("name") }}>
            <use xlinkHref={`${sprites}#icon-user`} />
          </Icon>
          <OtherIcon>
            <use xlinkHref={`${sprites}#${getIconName("name")}`} />
          </OtherIcon>
          {validation.name && !validateName(validation.name) && (
            <ErrorMsg>Invalid characters</ErrorMsg>
          )}
        </Label>
        <Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
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
            style={{ borderColor: getBorderColor("password") }}
          />
          <Icon>
            <use xlinkHref={`${sprites}#icon-password`} />
          </Icon>
          <OtherIcon>
            <use xlinkHref={`${sprites}#${getIconName("password")}`} />
          </OtherIcon>
          {validation.password && !validatePassword(validation.password) && (
            <WarningMsg>Your password is little secure</WarningMsg>
          )}
          {validation.password && validatePassword(validation.password) && (
            <SuccessMsg>Password is secure</SuccessMsg>
          )}
        </Label>
        <Submit type="submit">Sign up</Submit>
      </Form>
    </div>
  );
};
