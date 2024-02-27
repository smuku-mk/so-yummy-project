import { Link } from "react-router-dom";

import icons from "../../../images/sprites.svg";
import css from "./FollowUs.module.css";

export const FollowUs = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Follow us</h3>
      <ul className={css.items_list}>
        <li className={css.item}>
          <Link to="#" className={css.link}>
            <svg className={css.icon} width="26" height="26">
              <use href={`${icons}#icon-facebook`} />
            </svg>
          </Link>
        </li>
        <li className={css.item}>
          <Link to="#" className={css.link}>
            <svg className={css.icon} width="28" height="22">
              <use href={`${icons}#icon-youtube`} />
            </svg>
          </Link>
        </li>
        <li className={css.item}>
          <Link to="#" className={css.link}>
            <svg className={css.icon} width="25" height="22">
              <use href={`${icons}#icon-twitter`} />
            </svg>
          </Link>
        </li>
        <li className={css.item}>
          <Link to="#" className={css.link}>
            <svg className={css.icon} width="24" height="24">
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};
