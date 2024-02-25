import sprite from "../../../../images/sprites.svg";
import { Icon } from "./Logo.styled";

export const Logo = () => {
  return (
    <a href="/">
      <Icon>
        <use xlinkHref={`${sprite}#icon-logo`}></use>
      </Icon>
    </a>
  );
};
