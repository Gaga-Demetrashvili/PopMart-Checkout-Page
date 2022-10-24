/** @format */

import "./checkbox.styles.scss";

const Checkbox = ({ date, price, name, id, otherProps }) => {
  return (
    <div className="checkbox-container">
      <input className="checkbox" type="checkbox" id={id} name={name} />
      <label className="checkbox-label" htmlFor={id}>
        <div className="checkbox-label__left">
          <span className="checkbox-label__left__date">{date}</span>
          <span className="checkbox-label__left__price">{price}</span>
        </div>
        <span className="check-button"></span>
      </label>
    </div>
  );
};

export default Checkbox;
