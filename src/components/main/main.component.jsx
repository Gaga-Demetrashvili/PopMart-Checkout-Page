/** @format */

import "./main.styles.scss";
import CheckoutLeft from "../checkout-left/checkout-left.component";
import Order from "../order/order.component";

const Main = () => {
  return (
    <main className="main__content">
      <div className="main__content__container">
        <div className="main__content__container__left">
          <CheckoutLeft />
        </div>
        <div className="main__content__container__right">
          <Order />
        </div>
      </div>
    </main>
  );
};

export default Main;
