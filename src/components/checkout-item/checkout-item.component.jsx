/** @format */

import "./checkout-item.styles.scss";
import smartphone from "../../assets/images/smartPhone.jpg";

const CheckoutItem = () => {
  return (
    <div className="checkout__item">
      <div className="checkout__item__wrapper">
        <div className="checkout__item__container">
          <div className="checkout__item__image-container">
            <img
              className="checkout__item__image-container__image"
              src={smartphone}
              alt="smartphone"
            />
          </div>
          <div className="checkout__item__description">
            <p>Apple iPhone 13 Pro | 128GB Alpine Green</p>
            <p>Alta</p>
            <p>კიდევ 5 ადამიანის კალათაში</p>
          </div>
        </div>
        <div className="checkout__item__wrapper__actions">
          <div className="checkout__item__wrapper__actions__top">
            <p className="checkout__item__wrapper__actions__top__price">
              2899 ₾
            </p>
            <p className="checkout__item__wrapper__actions__top__prev-price">
              3000 ₾
            </p>
            <p className="checkout__item__wrapper__actions__top__sale">-3.7%</p>
            <button className="checkout__item__wrapper__actions__top__btn-remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g
                  id="Icon_trash"
                  data-name="Icon/trash"
                  transform="translate(-628.79 -5552.79)"
                  opacity="0.5"
                >
                  <rect
                    id="Rectangle_7446"
                    data-name="Rectangle 7446"
                    width="20"
                    height="20"
                    transform="translate(628.79 5552.79)"
                    fill="none"
                    opacity="0"
                  />
                  <g
                    id="Icon_trash-2"
                    data-name="Icon/trash"
                    transform="translate(633.79 5556.79)"
                  >
                    <path
                      id="_Icon_Сolor"
                      data-name="🎨 Icon Сolor"
                      d="M7.5,12h-5A1.671,1.671,0,0,1,1,10.2V3.6H.5A.557.557,0,0,1,0,3a.557.557,0,0,1,.5-.6H3v-1A1.327,1.327,0,0,1,4.25,0h1.5A1.328,1.328,0,0,1,7,1.4v1H9.5A.557.557,0,0,1,10,3a.557.557,0,0,1-.5.6H9v6.6A1.671,1.671,0,0,1,7.5,12ZM2,3.6v6.6a.557.557,0,0,0,.5.6h5a.557.557,0,0,0,.5-.6V3.6ZM4.25,1.2A.237.237,0,0,0,4,1.4v1H6v-1a.237.237,0,0,0-.25-.2Z"
                      transform="translate(0 0.001)"
                      fill="#513c63"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="checkout__item__wrapper__actions__bottom">
            <button className="checkout__item__wrapper__actions__bottom__btn-minus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      id="_Icon_Сolor"
                      data-name="🎨 Icon Сolor"
                      d="M11.25,2H.75C.336,2,0,1.553,0,1S.336,0,.75,0h10.5c.415,0,.75.447.75,1s-.335,1-.75,1"
                      fill="#513c63"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Icon_minus"
                  data-name="Icon/minus"
                  transform="translate(-4 -4)"
                  opacity="0.5"
                >
                  <g
                    id="Rectangle_5471"
                    data-name="Rectangle 5471"
                    transform="translate(4 4)"
                    fill="none"
                    stroke="#513c63"
                    strokeWidth="1"
                  >
                    <rect width="24" height="24" rx="8" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="7.5"
                      fill="none"
                    />
                  </g>
                  <g
                    id="Icon_minus-2"
                    data-name="Icon/minus"
                    transform="translate(8 8)"
                  >
                    <rect
                      id="Rectangle_5296"
                      data-name="Rectangle 5296"
                      width="16"
                      height="16"
                      fill="none"
                      opacity="0"
                    />
                    <g
                      id="Icon_minus-3"
                      data-name="Icon/minus"
                      transform="translate(2 7)"
                    >
                      <path
                        id="_Icon_Сolor-2"
                        data-name="🎨 Icon Сolor"
                        d="M11.25,2H.75C.336,2,0,1.553,0,1S.336,0,.75,0h10.5c.415,0,.75.447.75,1s-.335,1-.75,1"
                        fill="#513c63"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <span className="checkout__item__wrapper__actions__bottom__quantity">
              1
            </span>
            <button className="checkout__item__wrapper__actions__bottom__btn-plus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      id="_Icon_Сolor"
                      data-name="🎨 Icon Сolor"
                      d="M11.25,5.25H6.75V.75a.75.75,0,1,0-1.5,0v4.5H.75a.75.75,0,1,0,0,1.5h4.5v4.5a.75.75,0,1,0,1.5,0V6.75h4.5a.75.75,0,1,0,0-1.5"
                      fill="#513c63"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Icon_plus"
                  data-name="Icon/plus"
                  transform="translate(-3.964 -4)"
                >
                  <g
                    id="Rectangle_5470"
                    data-name="Rectangle 5470"
                    transform="translate(3.964 4)"
                    fill="none"
                    stroke="#513c63"
                    strokeWidth="1"
                  >
                    <rect width="24" height="24" rx="8" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="7.5"
                      fill="none"
                    />
                  </g>
                  <g
                    id="Icon_plus-2"
                    data-name="Icon/plus"
                    transform="translate(8 8)"
                  >
                    <rect
                      id="Rectangle_5296"
                      data-name="Rectangle 5296"
                      width="16"
                      height="16"
                      transform="translate(-0.036)"
                      fill="none"
                      opacity="0"
                    />
                    <g
                      id="Icon_plus-3"
                      data-name="Icon/plus"
                      transform="translate(1.964 2)"
                    >
                      <path
                        id="_Icon_Сolor-2"
                        data-name="🎨 Icon Сolor"
                        d="M11.25,5.25H6.75V.75a.75.75,0,1,0-1.5,0v4.5H.75a.75.75,0,1,0,0,1.5h4.5v4.5a.75.75,0,1,0,1.5,0V6.75h4.5a.75.75,0,1,0,0-1.5"
                        fill="#513c63"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
