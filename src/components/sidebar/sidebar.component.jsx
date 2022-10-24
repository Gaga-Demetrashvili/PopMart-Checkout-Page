/** @format */

import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            id="Icon_person-fill"
            data-name="Icon/person-fill"
            transform="translate(-0.256 -0.256)"
          >
            <rect
              id="Rectangle_1975"
              data-name="Rectangle 1975"
              width="24"
              height="24"
              transform="translate(0.256 0.256)"
              fill="none"
              opacity="0"
            />
            <g
              id="Icon_person-fill-2"
              data-name="Icon/person-fill"
              transform="translate(5.257 3.257)"
            >
              <path
                id="_Icon_Сolor"
                data-name="🎨 Icon Сolor"
                d="M1,18a1,1,0,0,1-1-1,7,7,0,1,1,14,0,1,1,0,0,1-1,1ZM3,4A4,4,0,1,1,7,8,4,4,0,0,1,3,4Z"
                transform="translate(0)"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            id="Icon_shopping-cart-fill"
            data-name="Icon/shopping-cart-fill"
            transform="translate(0.408 0.408)"
          >
            <rect
              id="Rectangle_7065"
              data-name="Rectangle 7065"
              width="24"
              height="24"
              transform="translate(-0.408 -0.408)"
              fill="none"
              opacity="0"
            />
            <g
              id="Icon_shopping-cart-fill-2"
              data-name="Icon/shopping-cart-fill"
              transform="translate(2.593 3.593)"
            >
              <path
                id="_Icon_Сolor"
                data-name="🎨 Icon Сolor"
                d="M13,14.667A1.394,1.394,0,1,1,14.395,16,1.364,1.364,0,0,1,13,14.667Zm-9.287,0a1.364,1.364,0,0,1,1.393-1.333,1.335,1.335,0,1,1,0,2.667A1.364,1.364,0,0,1,3.715,14.667Zm1.857-3.111a.923.923,0,0,1-.9-.654l-2.6-9.124H.929A.909.909,0,0,1,0,.889.909.909,0,0,1,.929,0H2.786a.923.923,0,0,1,.9.655l.572,2.012H16.143a1.877,1.877,0,0,1,1.58.843,1.712,1.712,0,0,1,.082,1.73l-3.042,5.825a.934.934,0,0,1-.831.492Z"
                transform="translate(0 0)"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
        <span className="cart-item-num">5</span>
      </div>
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            id="Group_52053"
            data-name="Group 52053"
            transform="translate(0.066 0.066)"
          >
            <rect
              id="Rectangle_1975"
              data-name="Rectangle 1975"
              width="24"
              height="24"
              transform="translate(-0.066 -0.066)"
              fill="none"
              opacity="0"
            />
            <g
              id="Icon_heart-fill"
              data-name="Icon/heart-fill"
              transform="translate(1.933 2.932)"
            >
              <path
                id="_Icon_Сolor"
                data-name="🎨 Icon Сolor"
                d="M10,18h0a.972.972,0,0,1-.708-.311L1.527,9.451a5.788,5.788,0,0,1,0-7.835,5.03,5.03,0,0,1,7.389,0L10,2.768l1.084-1.15a5.03,5.03,0,0,1,7.39,0,5.789,5.789,0,0,1,0,7.835l-7.764,8.236A.972.972,0,0,1,10,18"
                transform="translate(0 0.001)"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
