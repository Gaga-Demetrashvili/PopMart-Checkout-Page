/** @format */
import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  pink: "pink",
  categories: "categories",
  promotion: "promotion",
  order: "order",
};

const getButton = buttonType =>
  ({
    [BUTTON_TYPE_CLASSES.pink]: "btn-pink",
    [BUTTON_TYPE_CLASSES.categories]: "btn-categories",
    [BUTTON_TYPE_CLASSES.promotion]: "btn-promotion",
    [BUTTON_TYPE_CLASSES.order]: "btn-order",
  }[buttonType]);

const Button = ({ text, style }) => {
  const btnStyle = getButton(style);
  return <button className={btnStyle}>{text}</button>;
};

export default Button;
