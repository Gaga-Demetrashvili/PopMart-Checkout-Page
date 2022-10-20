/** @format */
import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  pink: "pink",
  categories: "categories",
  promotion: "promotion",
  order: "order",
  dashed: "dashed",
};

const getButton = buttonType =>
  ({
    [BUTTON_TYPE_CLASSES.pink]: "btn-pink",
    [BUTTON_TYPE_CLASSES.categories]: "btn-categories",
    [BUTTON_TYPE_CLASSES.promotion]: "btn-promotion",
    [BUTTON_TYPE_CLASSES.order]: "btn-order",
    [BUTTON_TYPE_CLASSES.dashed]: "btn-dashed",
  }[buttonType]);

const Button = ({ children, style, otherProps }) => {
  const btnStyle = getButton(style);
  return (
    <button {...otherProps} className={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
