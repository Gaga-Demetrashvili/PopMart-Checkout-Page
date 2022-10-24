/** @format */

import Button from "../button/button.component";
import "./../address-component/address.styles.scss";
import "./payment-method.styles.scss";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import RadioButton from "../radio-button/radio-button.component";

const PaymentMethodComp = () => {
  return (
    <div className="address__component">
      <div className="address__component__top">
        <h3>გადახდის მეთოდი</h3>
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
      <div className="payment__component__main">
        <div className="radio-buttons-group">
          <RadioButton
            otherProps={{ defaultChecked: true }}
            label="ბარათი"
            name="paymentMethod"
            id="card"
          />
          <RadioButton label="ბალანსი" name="paymentMethod" id="balance" />
          <RadioButton
            label="განვადება"
            name="paymentMethod"
            id="Installment"
          />
          <RadioButton label="Gift card" name="paymentMethod" id="giftCard" />
          <RadioButton label="ნაღდი ფული" name="paymentMethod" id="cash" />
        </div>
        <div className="border"></div>
        <div className="payment-details">
          <div className="payment__radio__group">
            <input
              className="payment__radio"
              type="radio"
              name="card"
              id="card-1"
              defaultChecked
            />
            <label className="payment__label" htmlFor="card-1">
              <div className="left">
                <div className="left__icon-container">
                  <svg
                    id="visa_icon"
                    data-name="visa icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="12"
                    viewBox="0 0 40 12"
                  >
                    <path
                      id="polygon9"
                      d="M436.751,122.312h-3.244l2.029-11.586h3.244Z"
                      transform="translate(-419.416 -110.499)"
                      fill="#00579f"
                    />
                    <path
                      id="path11"
                      d="M574.91,105.542a8.558,8.558,0,0,0-2.91-.495c-3.2,0-5.459,1.582-5.473,3.843-.027,1.668,1.615,2.6,2.843,3.151,1.255.568,1.682.939,1.682,1.446-.013.778-1.014,1.137-1.948,1.137a6.89,6.89,0,0,1-3.044-.618l-.427-.186-.454,2.608a10.569,10.569,0,0,0,3.618.618c3.4,0,5.62-1.557,5.646-3.967.013-1.322-.854-2.336-2.723-3.164-1.135-.532-1.829-.89-1.829-1.434.013-.494.588-1,1.868-1a5.89,5.89,0,0,1,2.416.445l.293.123.441-2.508Z"
                      transform="translate(-545.826 -105.048)"
                      fill="#00579f"
                    />
                    <path
                      id="path13"
                      d="M795.541,118.208c.267-.666,1.3-3.242,1.3-3.242-.013.025.267-.678.427-1.109l.227,1s.614,2.773.748,3.352Zm4-7.481h-2.509a1.617,1.617,0,0,0-1.7.961l-4.818,10.624h3.4l.681-1.738h4.165c.093.407.387,1.738.387,1.738h3l-2.617-11.585Z"
                      transform="translate(-762.162 -110.499)"
                      fill="#00579f"
                    />
                    <path
                      id="path15"
                      d="M173.845,110.727l-3.177,7.9-.347-1.6a9.1,9.1,0,0,0-4.485-4.856l2.91,10.131h3.43l5.1-11.572Z"
                      transform="translate(-162.445 -110.499)"
                      fill="#00579f"
                    />
                    <path
                      id="path17"
                      d="M86.438,110.727H81.219l-.053.253c4.071,1.041,6.768,3.551,7.876,6.567l-1.135-5.766a1.342,1.342,0,0,0-1.468-1.055Z"
                      transform="translate(-81.166 -110.499)"
                      fill="#faa61a"
                    />
                  </svg>
                  <span>არჩილ ლებანიძე</span>
                </div>
              </div>
              <div className="payment__right">
                <p>**** 8976</p>
                <span className="payment-radio-button"></span>
              </div>
            </label>
          </div>
          <div className="payment__radio__group">
            <input
              className="payment__radio"
              type="radio"
              name="card"
              id="card-2"
            />
            <label className="payment__label" htmlFor="card-2">
              <div className="left">
                <div className="left__icon-container">
                  <svg
                    id="visa_icon"
                    data-name="visa icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="12"
                    viewBox="0 0 40 12"
                  >
                    <path
                      id="polygon9"
                      d="M436.751,122.312h-3.244l2.029-11.586h3.244Z"
                      transform="translate(-419.416 -110.499)"
                      fill="#00579f"
                    />
                    <path
                      id="path11"
                      d="M574.91,105.542a8.558,8.558,0,0,0-2.91-.495c-3.2,0-5.459,1.582-5.473,3.843-.027,1.668,1.615,2.6,2.843,3.151,1.255.568,1.682.939,1.682,1.446-.013.778-1.014,1.137-1.948,1.137a6.89,6.89,0,0,1-3.044-.618l-.427-.186-.454,2.608a10.569,10.569,0,0,0,3.618.618c3.4,0,5.62-1.557,5.646-3.967.013-1.322-.854-2.336-2.723-3.164-1.135-.532-1.829-.89-1.829-1.434.013-.494.588-1,1.868-1a5.89,5.89,0,0,1,2.416.445l.293.123.441-2.508Z"
                      transform="translate(-545.826 -105.048)"
                      fill="#00579f"
                    />
                    <path
                      id="path13"
                      d="M795.541,118.208c.267-.666,1.3-3.242,1.3-3.242-.013.025.267-.678.427-1.109l.227,1s.614,2.773.748,3.352Zm4-7.481h-2.509a1.617,1.617,0,0,0-1.7.961l-4.818,10.624h3.4l.681-1.738h4.165c.093.407.387,1.738.387,1.738h3l-2.617-11.585Z"
                      transform="translate(-762.162 -110.499)"
                      fill="#00579f"
                    />
                    <path
                      id="path15"
                      d="M173.845,110.727l-3.177,7.9-.347-1.6a9.1,9.1,0,0,0-4.485-4.856l2.91,10.131h3.43l5.1-11.572Z"
                      transform="translate(-162.445 -110.499)"
                      fill="#00579f"
                    />
                    <path
                      id="path17"
                      d="M86.438,110.727H81.219l-.053.253c4.071,1.041,6.768,3.551,7.876,6.567l-1.135-5.766a1.342,1.342,0,0,0-1.468-1.055Z"
                      transform="translate(-81.166 -110.499)"
                      fill="#faa61a"
                    />
                  </svg>
                  <span>არჩილ ლებანიძე</span>
                </div>
              </div>
              <div className="payment__right">
                <p>**** 8976</p>
                <span className="payment-radio-button"></span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodComp;
