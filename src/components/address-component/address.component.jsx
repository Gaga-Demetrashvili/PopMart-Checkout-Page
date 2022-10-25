/** @format */

import Button from "../button/button.component";
import "./address.styles.scss";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import RadioButton from "../radio-button/radio-button.component";

const AddressComp = () => {
  return (
    <div className="address__component">
      <div className="address__component__top">
        <h3>მისამართი</h3>
        <Button
          //   otherProps={{ disabled: "true" }}
          style={BUTTON_TYPE_CLASSES.dashed}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="add"
              d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18.333A8.333,8.333,0,1,1,18.333,10,8.333,8.333,0,0,1,10,18.333ZM14.167,10a.833.833,0,0,1-.833.833h-2.5v2.5a.833.833,0,0,1-1.667,0v-2.5h-2.5a.833.833,0,1,1,0-1.667h2.5v-2.5a.833.833,0,1,1,1.667,0v2.5h2.5A.833.833,0,0,1,14.167,10Z"
              transform="translate(0 0)"
              fill="#513c63"
            />
          </svg>
          დამატება
        </Button>
      </div>
      <div className="address__component__main">
        <div className="radio-buttons-group">
          <RadioButton
            otherProps={{ defaultChecked: true }}
            label="სახლი"
            name="address"
            id="home"
          />
          <RadioButton label="სამსახური" name="address" id="work" />
          <RadioButton label="სხვა" name="address" id="other" />
        </div>
        <div className="border"></div>
        <div className="address-details">
          <div className="address-details__detail">
            <span className="detail-name">სახელი და გვარი:</span>
            <span className="detail-info">არჩილ ლებანიძე</span>
          </div>
          <div className="address-details__detail">
            <span className="detail-name">ტელეფონის ნომერი:</span>
            <span className="detail-info">+995 568056897</span>
          </div>
          <div className="address-details__detail">
            <span className="detail-name">ქალაქი:</span>
            <span className="detail-info">თბილისი</span>
          </div>
          <div className="address-details__detail">
            <span className="detail-name">მისამართი:</span>
            <span className="detail-info">
              Celeste Slater 606-3727 Ullamcorper. Street Roseville NH 11523
            </span>
          </div>
        </div>
      </div>
      <a href="#" className="address-link">
        რედაქტირება
      </a>
    </div>
  );
};

export default AddressComp;
