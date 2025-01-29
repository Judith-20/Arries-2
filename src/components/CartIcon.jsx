import { PiShoppingCartBold } from "../icon";
import PropTypes from "prop-types";

const CartIcon = ({ cart }) => {
  // console.log(totalQuantity);
  // console.log(cart?.reduce((total, item) => total + item.quantity, 0));
  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      className="bg-transparent border border-[#F2F4F7] rounded-[50%] p-1.5"
    >
      <PiShoppingCartBold size={15} className="cursor-pointer" />
      {cart?.length > 0 && (
        <span className="absolute text-xs text-rblue right-0 bottom-0 font-semibold">
          {cart?.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )}
    </div>
  );
};

CartIcon.propTypes = {
  cart: PropTypes.shape({
length: PropTypes.number,
reduce: PropTypes.func,
  })
};

export default CartIcon;
