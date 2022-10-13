/** @format */
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./order.styles.scss";

const Order = () => {
  return (
    <div className="order__container">
      <h3>შეკვეთა</h3>
      <p>გაქვს ვაუჩერი?</p>
      <div className="order__container__promotion">
        <input
          className="order__container__promotion__input"
          placeholder="Code"
          type="text"
        />
        <Button text="გამოყენება" style={BUTTON_TYPE_CLASSES.promotion} />
      </div>
    </div>
  );
};

export default Order;
