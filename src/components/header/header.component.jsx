/** @format */
import "./header.styles.scss";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Navigation from "../navigation/navigation.component";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__container">
          <div className="header__container__title">
            <p className="title">
              <span className="title__first-part">pop</span>
              <span className="title__second-part">mart</span>
            </p>
          </div>
          <div className="header__container__search">
            <div className="search__container">
              <div className="search__container__left">
                <svg
                  className="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g id="Icon_search" data-name="Icon/search" opacity="0.5">
                    <rect
                      id="Rectangle_1975"
                      data-name="Rectangle 1975"
                      width="24"
                      height="24"
                      fill="none"
                      opacity="0"
                    />
                    <g
                      id="Icon_search-2"
                      data-name="Icon/search"
                      transform="translate(6.004 6)"
                    >
                      <path
                        id="_Icon_Сolor"
                        data-name="🎨 Icon Сolor"
                        d="M11.338,12a.663.663,0,0,1-.472-.2L8.6,9.541a5.277,5.277,0,0,1-3.263,1.125,5.333,5.333,0,1,1,5.335-5.333A5.271,5.271,0,0,1,9.545,8.6l2.264,2.267A.667.667,0,0,1,11.338,12Zm-6-10.667a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"
                        transform="translate(0 0)"
                        fill="#1c1c1c"
                      />
                    </g>
                  </g>
                </svg>
                <input
                  className="search__container__left__input"
                  type="search"
                  placeholder="Search here"
                />
              </div>
              <div className="search__container__right">
                <Button style={BUTTON_TYPE_CLASSES.categories}>
                  ყველა კატეგორია
                </Button>
                {/* <svg
                className="search__container__right__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  id="Icon_arrow-ios-right"
                  data-name="Icon/arrow-ios-right"
                  transform="translate(24) rotate(90)"
                >
                  <rect
                    id="Rectangle_1975"
                    data-name="Rectangle 1975"
                    width="24"
                    height="24"
                    fill="none"
                    opacity="0"
                  />
                  <g
                    id="Icon_arrow-ios-right-2"
                    data-name="Icon/arrow-ios-right"
                    transform="translate(9 5)"
                  >
                    <path
                      id="_Icon_Сolor"
                      data-name="🎨 Icon Сolor"
                      d="M1,14a1,1,0,0,1-.768-1.64L4.707,6.989.392,1.627A1,1,0,1,1,1.951.373l4.828,6A1,1,0,0,1,6.768,7.64l-5,6A1,1,0,0,1,1,14"
                      fill="#1c1c1c"
                    />
                  </g>
                </g>
              </svg> */}
              </div>
            </div>
          </div>
          <div className="header__container__btn">
            <Button style={BUTTON_TYPE_CLASSES.pink}>% ფასდაკლებები</Button>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
