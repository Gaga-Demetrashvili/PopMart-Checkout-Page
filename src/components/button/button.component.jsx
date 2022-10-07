/** @format */
import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  pink: "pink",
  categories: "categories",
};

const getButton = buttonType =>
  ({
    [BUTTON_TYPE_CLASSES.pink]: "btn-pink",
    [BUTTON_TYPE_CLASSES.categories]: "btn-categories",
  }[buttonType]);

const Button = ({ text, style }) => {
  const btnStyle = getButton(style);
  return <button className={btnStyle}>{text}</button>;
};

export default Button;
