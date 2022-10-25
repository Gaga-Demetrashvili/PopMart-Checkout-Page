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
        <div className="order__details__detail">
          <span className="text-details">პროდუქტი (2)</span>
          <p className="price-details">
            <span className="order-price">2 899</span> ₾
          </p>
        </div>
        <div className="order__details__detail">
          <span className="text-details">მიტანის ღურებულება</span>
          <p className="price-details">
            <span className="order-price">15</span> ₾
          </p>
        </div>
        <div className="order__details__detail">
          <span className="text-details">პრომო კოდი</span>
          <p className="price-details discount">
            <span className="order-discount">-25</span>%
          </p>
        </div>
        <div className="order__details__detail">
          <span className="text-details">ჯამური ღირებულება</span>
          <p className="price-details">
            <span className="order-price-big">2 884</span> ₾
          </p>
        </div>
      </div>
      <Button style={BUTTON_TYPE_CLASSES.order}>შეკვეთის გაფორმება</Button>
    </div>
  );
};

export default Order;
