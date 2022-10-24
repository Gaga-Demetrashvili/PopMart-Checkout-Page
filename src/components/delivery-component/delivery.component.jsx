/** @format */
import "./delivery.styles.scss";
import Checkbox from "../checkbox/checkbox.component";

const DeliveryComp = () => {
  return (
    <div className="delivery__component">
      <h3>მიტანის თარიღი</h3>
      <div className="delivery__check-group">
        <Checkbox
          date="ორშაბათი, 13 ივნისი"
          price="15.00 ₾"
          id="first"
          name="delivery"
        />
        <Checkbox
          date="სამშაბათი, 14 ივნისი"
          price="15.00 ₾"
          id="second"
          name="delivery"
        />
        <Checkbox
          date="ოთხშაბათი, 15 ივნისი"
          price="15.00 ₾"
          id="third"
          name="delivery"
        />
      </div>
    </div>
  );
};

export default DeliveryComp;
