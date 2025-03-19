import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";
import { PiShoppingCartBold } from "../icon";

const CartIcon = ({style}) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <div
      style={style}
      className="bg-transparent border relative inline-block border-[#F2F4F7] rounded-[50%] p-1.5 "
      onClick={() => navigate("/cart")}
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



export default CartIcon;
