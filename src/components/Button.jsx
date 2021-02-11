import PropTypes from "prop-types";
const Button = ({ text, type, style, handleDelete, id }) => {
  const handleAction = (id) => {
    if (handleDelete) {
      handleDelete(id);
    }
  };
  return (
    <div className="wrapperButton">
      <button className={style} type={type} onClick={() => handleAction(id)}>
        {text}
      </button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
  id: PropTypes.string,
};
export default Button;
