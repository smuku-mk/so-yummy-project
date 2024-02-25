import sprite from "../../../../images/sprites.svg";
import { Btn, Hamburger } from "./Nav.styled";

export const Nav = () => {
  return (
    <Btn type="button">
      <Hamburger>
        <use xlinkHref={`${sprite}#icon-hamburger`}></use>
      </Hamburger>
    </Btn>
  );
};
