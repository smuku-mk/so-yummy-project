import sprite from "../../../../images/sprites.svg";
import { Btn, Burger } from "./Hamburger.styled";

export const Hamburger = () => {
  return (
    <Btn type="button">
      <Burger>
        <use xlinkHref={`${sprite}#icon-hamburger`}></use>
      </Burger>
    </Btn>
  );
};
