import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired, // `node` allows any renderable content
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function Button({children, style, onClick}) {
  return (
    <div>
      <button style={style} onClick={onClick} className="btn border border-rblue rounded-md">{children}</button>

    </div>
  )
}

export default Button
