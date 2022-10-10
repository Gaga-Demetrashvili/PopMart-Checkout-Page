/** @format */

import "./main.styles.scss";
import CheckoutLeft from "../checkout-left/checkout-left.component";

const Main = () => {
  return (
    <main className="main__content">
      <div className="main__content__left">
        <CheckoutLeft />
      </div>
    </main>
  );
};

export default Main;
