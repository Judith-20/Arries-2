import { useNavigate } from "react-router-dom";

import { FaPlus, BsDashCircleFill } from "../icon";

import HomePageFooter from "./homepagefooter";
import Billing from "./Billing";
import NavBar from "../pages/NavBar";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthContext";
import MobileNav from "./MobileNav";

function formatCurrency(value) {
  const formattedCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumSignificantDigits: "2",
  }).format(value);
  return formattedCurrency;
}
const cartDisplay = {
  display: "none",
};

function Checkout() {
  // const calculateTotalPrice = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // };
  const { cart, dispatch } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingFee = 3000;

  const total = subtotal + shippingFee;

  return (
    <>
      <div className="mobile:w-full ">
        <div className="mx-10 mobile:mx-6 mobile:px-6 0 mt-2  w-[94%] bg-whyte ">
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-8">
            <NavBar>
              <button
                className=" border border-rblue rounded-md text-rblue py-2 px-2 active:bg-[#035ceb] mobile:hidden "
                onClick={handleLogout}
              >
                {" "}
                Log out
              </button>
            </NavBar>
            <MobileNav style={cartDisplay} />
          </nav>
          {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
          <div className="w-full">
            <h1 className="md:font-medium font-semibold mb-4 md:mb-8 md:text-xl text-center ">
              Checkout
            </h1>
            <div className="flex mobile:justify-between md:space-x-[18rem] pb-2.5 text-[#98A2B3] text-sm mobile:w-full ">
              <p className="">Product</p>
              <p className="pl-[10rem] mobile:hidden">Price</p>
              <p className="mobile:hidden">Quantity</p>
              <p className="">Total</p>
            </div>
            <hr className=" border-[#D0D5DD] " />

            <div className="flex flex-col gap-1 py-4">
              {cart?.map((product, index) => (
                <div
                  key={index}
                  className="flex md:h-32 mobile:justify-between md:space-x-56 my-2"
                >
                  <div className="flex">
                    <div className="h-full w-[40%] md:w-[45%]">
                      <img
                        src={product.image}
                        alt=""
                        className="w-full h-full "
                      />
                    </div>
                    <span className="pl-3 mobile:py-6 mobile:flex mobile:flex-col mobile:justify-between mobile:h-full">
                      {/* pl-1 mobile:py-6 mobile:flex mobile:flex-col mobile:justify-between mobile:h-full */}
                      <h1 className="font-semibold capitalize text-sm md:text-lg pt-1 pb-1">
                        {product.title} Set
                      </h1>
                      <p className="pb-1 text-xs md:text-sm font-medium">
                        Color: Pink, Blue
                      </p>
                      <p className="pb-1 text-xs md:text-sm font-medium">Size: M, L</p>
                      {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

                      <button
                        className="border-b-2 mobile:w-[3.5rem] text-sm text-error border-error"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      >
                        Remove
                      </button>
                    </span>
                  </div>

                  <div className="flex mobile:hidden">
                    <p className=" text-lg font-semibold pr">
                      {formatCurrency(product.price)}
                    </p>
                  </div>

                  <div className="flex gap-5 h-10 items-center border border-rblue px-2 rounded mobile:hidden">
                    <span className="flex items-center">
                      <BsDashCircleFill
                        size={15}
                        className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                        onClick={() =>
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: product,
                          })
                        }
                      />
                    </span>
                    {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                    <p className="text-sm text-[#98A2B3] ">
                      {product.quantity}
                    </p>

                    <span
                      className="border w-[18px] h-[18px] flex items-center bg-blue-500 text-white rounded-full"
                      onClick={() =>
                        dispatch({
                          type: "INCREASE_QUANTITY",
                          payload: product,
                        })
                      }
                    >
                      <FaPlus size={8} className="  ml-[4px] cursor-pointer " />
                    </span>
                  </div>
                  <div className="font-semibold">
                    {formatCurrency(product.price * product.quantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className=" border-[#D0D5DD] mobile:hidden" />
          <div className="w-full flex items-end justify-end">
            <span className="mobile:border-[#D0D5DD] mobile:border-t flex flex-col text-sm font-medium">
              <p className="text-error md:text-[0.65rem] border-b border-[#D0D5DD] pt-1 pb-0.5 mb-2 flex justify-between gap-4 ">
                Subtotal
                <span className=" text-black font-semibold">
                  {formatCurrency(subtotal)}
                </span>
              </p>
              <p className="text-error md:text-[0.65rem] border-b border-[#D0D5DD] py-0.5 flex justify-between gap-4">
                Shipping Fee
                <span className=" text-black font-semibold">
                  {formatCurrency(shippingFee)}
                </span>
              </p>
              <p className="mobile:text-lg font-medium mt-2 flex justify-between items-center gap-4">
                Total:
                <span className="text-rblue text-sm md:text-[0.9rem] font-semibold tracking-wide">
                  {formatCurrency(total)}
                </span>
              </p>
            </span>
          </div>

          {/* Billing Details */}
          <Billing />
        </div>
        <HomePageFooter />
      </div>
    </>
  );
}

export default Checkout;
