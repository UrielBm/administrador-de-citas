import PropTypes from "prop-types";
const Inputs = ({ type, name, placeholder, title, callback, value }) => {
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    callback(value, name);
  };
  return (
    <div className="wrapperInput">
      <label htmlFor={name} className="label">
        {title}
      </label>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};
Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Inputs;
