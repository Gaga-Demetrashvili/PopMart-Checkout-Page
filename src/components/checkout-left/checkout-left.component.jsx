/** @format */
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout-left.styles.scss";
import AddressComp from "../address-component/address.component";

const CheckoutLeft = () => {
  return (
    <div className="checkout__left__container">
      <h3 className="checkout__left__container__title">პროდუქტ(ებ)ი</h3>
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <AddressComp />
    </div>
  );
};

export default CheckoutLeft;
