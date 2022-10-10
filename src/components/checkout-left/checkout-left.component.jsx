/** @format */
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout-left.styles.scss";

const CheckoutLeft = () => {
  return (
    <div className="checkout__left__container">
      <h3 className="checkout__left__container__title">პროდუქტ(ებ)ი</h3>
      <CheckoutItem />
    </div>
  );
};

export default CheckoutLeft;
