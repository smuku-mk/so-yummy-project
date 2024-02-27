import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  variant = "primary",
  size = "default",
  unique,
  element = "button",
  dark = false,
  children,
  ...props
}) => {
  const validVariantss = {
    primary: {
      large: styles["primary-large"],
      medium: styles["primary-medium"],
      default: styles["primary"],
      small: styles["primary-small"],
    },
    secondary: {
      large: styles["secondary-large"],
      medium: styles["secondary-medium"],
      default: `${styles["secondary"]}`,
      small: styles["secondary-small"],
    },
    outline: {
      large: styles["outline-large"],
      medium: styles["outline-medium"],
      default: styles["outline"],
      small: styles["outline-small"],
    },
  };
  const validUnique = {
    short: styles.short,
    fill: styles.fill,
    svg: styles.svg,
    reverse: styles.reverse,
  };

  const variantClass = validVariantss[variant]?.[size] || "";
  const uniqueClass = validUnique[unique] || "";
  const colorClass = dark === true ? styles["dark"] : "";

  const classes = [variantClass, colorClass, uniqueClass];
  const classNames = classes.filter(Boolean).join(" ");

  const svgExists = children?.[0].type === "svg" && unique === "svg";

  return (
    <>
      {element === "button" && (
        <button className={`${styles.container} ${classNames}`} {...props}>
          {children}
        </button>
      )}
      {element === "input" && (
        <label className={`${styles.container} ${classNames} ${styles.input}`}>
          {svgExists && children[0]}
          <input placeholder={svgExists ? children[1] : children} {...props} />
        </label>
      )}
    </>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["small", "default", "medium", "large"]),
  unique: PropTypes.oneOf(["svg", "short", "fill", "reverse"]),
  element: PropTypes.oneOf(["button", "input"]),
  dark: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
