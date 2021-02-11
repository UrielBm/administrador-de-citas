import PropTypes from "prop-types";
const TextArea = ({ title, name, callback, value }) => {
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    callback(value, name);
  };
  return (
    <div className="wrapperTextArea">
      <label htmlFor={name} className="label">
        {title}
      </label>
      <textarea
        className="textarea"
        name={name}
        onChange={handleOnChange}
        value={value}
      ></textarea>
    </div>
  );
};
TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default TextArea;
