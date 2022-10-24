/** @format */
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout-left.styles.scss";
import AddressComp from "../address-component/address.component";
import DeliveryComp from "../delivery-component/delivery.component";
import PaymentMethodComp from "../payment-method/payment-method.component";
import Link from "../path-of-links/path-of-links.component";

const CheckoutLeft = () => {
  return (
    <div className="checkout__left__container">
      <div className="linkPath">
        <Link text="Category name" bool={true} />
        <Link text="Subcategory name" bool={true} />
        <Link text="Product name" bool={true} />
        <Link text="cart" bool={true} />
        <Link text="Checkout" bool={false} last={true} />
      </div>
      <h3 className="checkout__left__container__title">პროდუქტ(ებ)ი</h3>
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <AddressComp />
      <DeliveryComp />
      <PaymentMethodComp />
    </div>
  );
};

export default CheckoutLeft;
