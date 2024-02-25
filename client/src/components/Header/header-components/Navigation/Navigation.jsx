import sprite from "../../../../images/sprites.svg";
import { Btn, Hamburger } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Btn type="button">
      <Hamburger>
        <use xlinkHref={`${sprite}#icon-hamburger`}></use>
      </Hamburger>
    </Btn>
  );
};
