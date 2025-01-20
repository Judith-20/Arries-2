import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired, // `node` allows any renderable content
  style: PropTypes.object,
};

function Button({children, style}) {
  return (
    <div>
      <button style={style} className="border border-rblue rounded-md active:bg-[#035ceb]">{children}</button>

    </div>
  )
}

export default Button
