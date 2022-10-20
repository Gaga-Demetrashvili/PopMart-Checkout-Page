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
        <Button style={BUTTON_TYPE_CLASSES.promotion}>გამოყენება</Button>
      </div>
      <div className="order__details">
        <ul className="order__details__list--left">
          <li>პროდუქტი (3)</li>
          <li>მიტანის ღირებულება</li>
          <li>პრომო კოდი</li>
          <li>ჯამური ღირებულება</li>
        </ul>
        <ul className="order__details__list--right">
          <li>2 899 ₾</li>
          <li>15 ₾</li>
          <li>-25%</li>
          <li>2 884 ₾</li>
        </ul>
      </div>
      <Button style={BUTTON_TYPE_CLASSES.order}>შეკვეთის გაფორმება</Button>
    </div>
  );
};

export default Order;
