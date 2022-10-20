/** @format */
import "./radio-button.styles.scss";

const RadioButton = ({ name, id, label, otherProps }) => {
  return (
    <div className="radio__group">
      <input
        {...otherProps}
        className="radio"
        type="radio"
        name={name}
        id={id}
      />
      <label className="label" htmlFor={id}>
        <span className="radio-button"></span>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
