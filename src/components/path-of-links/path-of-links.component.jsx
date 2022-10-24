/** @format */
import "./path-of-links.styles.scss";

const Link = ({ text, bool, last }) => {
  return (
    <div className="link__container ">
      <a className={last ? "lastLink" : "pathLink"} href="#">
        {text}
      </a>
      {bool && (
        <span>
          <svg
            className="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <g
              id="Group_52905"
              data-name="Group 52905"
              transform="translate(-658 -326)"
              opacity="0.5"
            >
              <rect
                id="Rectangle_1975"
                data-name="Rectangle 1975"
                width="16"
                height="16"
                transform="translate(658 326)"
                fill="none"
                opacity="0"
              />
              <g
                id="Icon_arrow-ios-right"
                data-name="Icon/arrow-ios-right"
                transform="translate(664 330)"
              >
                <path
                  id="_Icon_Сolor"
                  data-name="🎨 Icon Сolor"
                  d="M.572,8a.571.571,0,0,1-.439-.937L2.69,3.993.224.93A.572.572,0,0,1,1.115.213L3.874,3.641a.571.571,0,0,1-.006.724L1.011,7.794A.571.571,0,0,1,.572,8"
                  transform="translate(0 0)"
                  fill="#707070"
                />
              </g>
            </g>
          </svg>
        </span>
      )}
    </div>
  );
};

export default Link;
