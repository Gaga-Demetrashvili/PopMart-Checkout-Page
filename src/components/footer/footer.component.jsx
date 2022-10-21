/** @format */
import "./../../assets/styles/_general.scss";
import "./footer.styles.scss";

const Footer = () => {
  const currDate = new Date();
  const currYear = currDate.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <p>ჩვენს შესახებ</p>
          <ul>
            <li>
              <a href="#">ვინ ვართ</a>
            </li>
          </ul>
        </div>
        <div className="footer--list-2">
          <div>
            <p>წესები და პირობები</p>
            <ul>
              <li>
                <a href="#">წესები და პირობები</a>
              </li>
              <li>
                <a href="#">დაბრუნების პოლიტიკა</a>
              </li>
              <li>
                <a href="#">ხშირად დასმული კითხვები</a>
              </li>
              <li>
                <a href="#">კონფიდენციალურობა</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer--list-3">
          <div>
            <p>გაყიდე Popmart-ზე</p>
            <ul>
              <li>
                <a href="#">რეგისტრაცია</a>
              </li>
              <li>
                <a href="#">წესები და პირობები</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__last-list">
          <div>
            <p>კონტაქტი</p>
            <ul>
              <li className="contact-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_46283"
                    data-name="Group 46283"
                    transform="translate(-0.096)"
                  >
                    <rect
                      id="Rectangle_5064"
                      data-name="Rectangle 5064"
                      width="24"
                      height="24"
                      transform="translate(0.096)"
                      fill="none"
                      opacity="0"
                    />
                    <g
                      id="Icon_phone"
                      data-name="Icon/phone"
                      transform="translate(2 2)"
                    >
                      <path
                        id="_Icon_Сolor"
                        data-name="🎨 Icon Сolor"
                        d="M15.4,20A15.417,15.417,0,0,1,0,4.6,4.605,4.605,0,0,1,4.6,0a4.483,4.483,0,0,1,.766.065,4.353,4.353,0,0,1,.725.184A1,1,0,0,1,6.738.97L8.107,6.934a1,1,0,0,1-.253.916c-.135.141-.137.144-1.38.794a9.927,9.927,0,0,0,4.88,4.883c.65-1.241.653-1.244.8-1.381a1,1,0,0,1,.7-.278,1.02,1.02,0,0,1,.22.024l5.965,1.37a.991.991,0,0,1,.72.645,4.375,4.375,0,0,1,.184.732A4.511,4.511,0,0,1,20,15.4,4.605,4.605,0,0,1,15.4,20ZM4.6,2A2.6,2.6,0,0,0,2,4.6,13.415,13.415,0,0,0,15.4,18,2.6,2.6,0,0,0,18,15.4a2.653,2.653,0,0,0-.021-.328l-4.621-1.06-.073.14c-.07.134-.143.273-.211.4-.368.7-.659,1.257-1.2,1.257a1.135,1.135,0,0,1-.424-.093A11.848,11.848,0,0,1,4.27,8.51c-.358-.786.323-1.141,1.185-1.591l.536-.281L4.928,2.021A2.547,2.547,0,0,0,4.6,2Z"
                        transform="translate(0 0)"
                        fill="#e1e1e1"
                      />
                    </g>
                  </g>
                </svg>
                032 2 58 89 96
              </li>
              <li className="contact-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_46284"
                    data-name="Group 46284"
                    transform="translate(-0.221)"
                  >
                    <rect
                      id="Rectangle_687"
                      data-name="Rectangle 687"
                      width="24"
                      height="24"
                      transform="translate(0.221)"
                      fill="none"
                      opacity="0"
                    />
                    <g
                      id="Icon_email"
                      data-name="Icon/email"
                      transform="translate(2 4)"
                    >
                      <path
                        id="_Icon_Сolor"
                        data-name="🎨 Icon Сolor"
                        d="M17,16H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H17a3,3,0,0,1,3,3V13A3,3,0,0,1,17,16ZM2,3.25V13a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3.25L10.6,8.8a1,1,0,0,1-1.2,0ZM3.667,2,10,6.75,16.333,2Z"
                        fill="#e1e1e1"
                      />
                    </g>
                  </g>
                </svg>
                workmail@work.com
              </li>
              <li>
                <ul className="social-networks">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g
                          id="Group_46281"
                          data-name="Group 46281"
                          transform="translate(-701.23)"
                        >
                          <rect
                            id="Rectangle_6707"
                            data-name="Rectangle 6707"
                            width="32"
                            height="32"
                            transform="translate(701.23)"
                            fill="none"
                            opacity="0"
                          />
                          <g
                            id="icons8-facebook"
                            transform="translate(705 3.5)"
                          >
                            <path
                              id="Path_24016"
                              data-name="Path 24016"
                              d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"
                              transform="translate(-4 -4)"
                              fill="#e9e9e9"
                            />
                            <path
                              id="Path_24017"
                              data-name="Path 24017"
                              d="M22.48,22.517H25.6l.49-3.171H22.48V17.613c0-1.317.431-2.485,1.663-2.485h1.98V12.362a16.826,16.826,0,0,0-2.474-.15c-2.9,0-4.6,1.533-4.6,5.026v2.109H16.06v3.171h2.984v8.715a10.973,10.973,0,0,0,3.437.025Z"
                              transform="translate(-8.85 -7.381)"
                              fill="#0c0c0c"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g
                          id="Group_46280"
                          data-name="Group 46280"
                          transform="translate(-701.23)"
                        >
                          <rect
                            id="Rectangle_6707"
                            data-name="Rectangle 6707"
                            width="32"
                            height="32"
                            transform="translate(701.23)"
                            fill="none"
                            opacity="0"
                          />
                          <g
                            id="icons8-linkedin"
                            transform="translate(705 3.5)"
                          >
                            <path
                              id="Path_24018"
                              data-name="Path 24018"
                              d="M30,26.667A3.333,3.333,0,0,1,26.667,30H9.333A3.333,3.333,0,0,1,6,26.667V9.333A3.333,3.333,0,0,1,9.333,6H26.667A3.333,3.333,0,0,1,30,9.333Z"
                              transform="translate(-6 -6)"
                              fill="#e9e9e9"
                            />
                            <path
                              id="Path_24019"
                              data-name="Path 24019"
                              d="M12,16.648h3.32V27.937H12Zm1.65-1.328h-.019A1.66,1.66,0,0,1,13.669,12a1.66,1.66,0,1,1-.019,3.32ZM27.937,27.937h-3.32V21.9a2.166,2.166,0,0,0-2.12-2.456,1.9,1.9,0,0,0-1.8,1.321,4.79,4.79,0,0,0-.067,1.2v5.977h-3.32V16.648h3.32v1.737a3.359,3.359,0,0,1,3.146-1.737c2.376,0,4.158,1.494,4.158,4.83v6.459Z"
                              transform="translate(-7.969 -7.969)"
                              fill="#0c0c0c"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g
                          id="Group_46279"
                          data-name="Group 46279"
                          transform="translate(-701.23)"
                        >
                          <rect
                            id="Rectangle_6707"
                            data-name="Rectangle 6707"
                            width="32"
                            height="32"
                            transform="translate(701.23)"
                            fill="none"
                            opacity="0"
                          />
                          <g
                            id="icons8-instagram"
                            transform="translate(705 3.5)"
                          >
                            <path
                              id="Path_24024"
                              data-name="Path 24024"
                              d="M24.665,29.978l-13.326.013A5.347,5.347,0,0,1,6,24.665L5.99,11.339A5.347,5.347,0,0,1,11.315,6L24.642,5.99a5.347,5.347,0,0,1,5.336,5.325l.013,13.326A5.345,5.345,0,0,1,24.665,29.978Z"
                              transform="translate(-5.99 -5.99)"
                              fill="#e9e9e9"
                            />
                            <path
                              id="Path_24025"
                              data-name="Path 24025"
                              d="M24.665,29.978l-13.326.013A5.347,5.347,0,0,1,6,24.665L5.99,11.339A5.347,5.347,0,0,1,11.315,6L24.642,5.99a5.347,5.347,0,0,1,5.336,5.325l.013,13.326A5.345,5.345,0,0,1,24.665,29.978Z"
                              transform="translate(-5.99 -5.99)"
                              fill="#e9e9e9"
                            />
                            <path
                              id="Path_24026"
                              data-name="Path 24026"
                              d="M21.664,26.329a4.664,4.664,0,1,1,4.664-4.664A4.67,4.67,0,0,1,21.664,26.329Zm0-8A3.332,3.332,0,1,0,25,21.664,3.335,3.335,0,0,0,21.664,18.333Z"
                              transform="translate(-9.664 -9.664)"
                              fill="#0c0c0c"
                            />
                            <circle
                              id="Ellipse_250"
                              data-name="Ellipse 250"
                              cx="1"
                              cy="1"
                              r="1"
                              transform="translate(16.231 6.5)"
                              fill="#0c0c0c"
                            />
                            <path
                              id="Path_24027"
                              data-name="Path 24027"
                              d="M23.66,28.324h-8A4.67,4.67,0,0,1,11,23.66v-8A4.67,4.67,0,0,1,15.664,11h8a4.67,4.67,0,0,1,4.664,4.664v8A4.67,4.67,0,0,1,23.66,28.324Zm-8-15.992a3.335,3.335,0,0,0-3.332,3.332v8a3.335,3.335,0,0,0,3.332,3.332h8a3.335,3.335,0,0,0,3.332-3.332v-8a3.335,3.335,0,0,0-3.332-3.332Z"
                              transform="translate(-7.662 -7.662)"
                              fill="#0c0c0c"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g
                          id="Group_46282"
                          data-name="Group 46282"
                          transform="translate(-701.23)"
                        >
                          <rect
                            id="Rectangle_6707"
                            data-name="Rectangle 6707"
                            width="32"
                            height="32"
                            transform="translate(701.23)"
                            fill="none"
                            opacity="0"
                          />
                          <g id="icons8-youtube" transform="translate(705 6.5)">
                            <path
                              id="Path_24020"
                              data-name="Path 24020"
                              d="M25.461,22.94a2.992,2.992,0,0,1-2.513,2.4A62.172,62.172,0,0,1,13.97,26a63.655,63.655,0,0,1-8.978-.66,2.991,2.991,0,0,1-2.513-2.4A35.194,35.194,0,0,1,2,17a35.194,35.194,0,0,1,.479-5.94,2.992,2.992,0,0,1,2.513-2.4A62.172,62.172,0,0,1,13.97,8a62.907,62.907,0,0,1,8.978.66,2.991,2.991,0,0,1,2.513,2.4A34.109,34.109,0,0,1,26,17,41.31,41.31,0,0,1,25.461,22.94Z"
                              transform="translate(-2 -8)"
                              fill="#e9e9e9"
                            />
                            <path
                              id="Path_24021"
                              data-name="Path 24021"
                              d="M25.888,19.036,19.6,14.681a.994.994,0,0,0-1.058-.053,1.076,1.076,0,0,0-.545.944v8.711a1.077,1.077,0,0,0,.545.945,1,1,0,0,0,1.057-.053l6.285-4.356a1.1,1.1,0,0,0,0-1.783Z"
                              transform="translate(-9.308 -10.927)"
                              fill="#e9e9e9"
                              opacity="0.05"
                            />
                            <path
                              id="Path_24022"
                              data-name="Path 24022"
                              d="M19.7,15.138l5.93,4.119c.379.283.634.537.634.866a.884.884,0,0,1-.393.764c-.2.155-6.071,4.216-6.071,4.216-.5.346-1.3.273-1.3-.858V16C18.5,14.853,19.371,14.91,19.7,15.138Z"
                              transform="translate(-9.533 -11.155)"
                              fill="#e9e9e9"
                              opacity="0.07"
                            />
                            <path
                              id="Path_24023"
                              data-name="Path 24023"
                              d="M19,24.721V16.036a.511.511,0,0,1,.8-.444l6.239,4.343a.547.547,0,0,1,0,.889L19.8,25.167A.511.511,0,0,1,19,24.721Z"
                              transform="translate(-9.758 -11.378)"
                              fill="#0c0c0c"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © {currYear} Popmart ყველა უფლება დაცულია</p>
      </div>
    </footer>
  );
};

export default Footer;
