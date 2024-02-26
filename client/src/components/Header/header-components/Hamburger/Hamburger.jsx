import sprite from "../../../../images/sprites.svg";
import { Btn, Burger } from "./Hamburger.styled";

export const Hamburger = ({ toggleMenu }) => {
  return (
    <Btn type="button" onClick={toggleMenu}>
      <Burger>
        <use xlinkHref={`${sprite}#icon-hamburger`}></use>
      </Burger>
    </Btn>
  );
};
