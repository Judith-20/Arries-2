import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { BsDashCircleFill, TbBus, BsBoxSeam, PiCurrencyNgn } from "../icon";
import { FaPlus } from "react-icons/fa";

import Cards from "../materials/productslisting/product details/10.png";

import HomePageFooter from "./homepagefooter";
import CustomersReview from "./customers_review";
import NavBar from "../pages/NavBar";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthContext";
import MobileNav from "./MobileNav";

function formatCurrency(value) {
  const formattedCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    // minimumSignificantDigits:"2"
  }).format(value);
  return formattedCurrency;
}

const cartDisplay = {
  display: "none",
};

function Cart() {
  const { cart, dispatch } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  // console.log(cartItems);

  // Calculate total price for the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <>
      <div className="mobile:w-full ">
        <div className="mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte ">
          <nav className=" flex justify-between mobile:bg-[hsla(0, 0%, 98%, 1)]  mobile:mt-2 mobile:pt-4 items-center bg-whyte mb-8">
            <NavBar>
              <button
                className="mobile:hidden border border-rblue rounded-md text-rblue py-2 px-2 active:bg-[#035ceb] "
                onClick={handleLogout}
              >
                Log out
              </button>
            </NavBar>

            <MobileNav style={cartDisplay} />
          </nav>

          <div className="">
            <h1 className="md:font-medium font-semibold md:text-xl text-center mobile:mb-3 ">
              Carts ({cart.length})
            </h1>
            <div className="text-right mobile:hidden">
              <Link to="/shop">
                <p className="text-rblue ">Continue shopping</p>
              </Link>
              <span className="border-x-0 border-t-[1px] border-b-0 border-rblue px-[70px] "></span>
            </div>
            <hr className="border md:w-[700px] mb-3" />
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <div className="flex mobile:flex-col mobile:w-full md:justify-between ">
                  <div className="flex flex-col  gap-1">
                    {cart?.map((product, index) => (
                      <div
                        key={index}
                        className="flex mobile:justify-between md:h-32 md:gap-[133px] my-2"
                      >
                        <div className="flex gap-2">
                          <div className="h-full w-[40%] md:w-[45%]">
                            <img
                              src={product.image}
                              alt=""
                              className="w-full h-full "
                            />
                          </div>
                          <span className="pl-1 mobile:py-6 mobile:flex mobile:flex-col mobile:justify-between mobile:h-full">
                            <h1 className="font-semibold capitalize text-lg pt-1 pb-1">
                              {product.title} Set
                            </h1>
                            <p className="pb-1 text-sm font-medium">
                              Color: Pink, Blue
                            </p>
                            <p className="pb-1 text-sm font-medium">
                              Size: M, L
                            </p>
                            {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

                            <button
                              className="border-b-2 mobile:w-[3.5rem] text-sm text-error border-error"
                              // onClick={() => onRemove(product.id)}
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

                        <div className="flex mobile:flex-col mobile:items-center md:w-[40%] justify-between gap-24 mobile:h-full ">
                          <p className="text-lg font-semibold">
                            {formatCurrency(product.price)}
                          </p>

                          <div className="flex gap-5 h-10 items-center border border-rblue px-2 rounded">
                            <span className="flex items-center">
                              <BsDashCircleFill
                                size={15}
                                className="text-[#D0D5DD] mr-2 cursor-pointer"
                                onClick={() =>
                                  dispatch({
                                    type: "DECREASE_QUANTITY",
                                    payload: product,
                                  })
                                }
                              />
                            </span>
                            <p className="text-sm text-[#98A2B3] ">
                              {" "}
                              {product.quantity}{" "}
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
                              <FaPlus
                                size={8}
                                className="  ml-[4px] cursor-pointer "
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="pt-4 md:ml-3 mobile:mt-5  mobile:flex mobile:flex-col ">
                    <div className="mobile:order-2">
                      <h2 className="font-semibold text-sm md:text-[15px] pb-3">
                        Summary
                      </h2>
                      <span className="flex justify-between w-full text-[#98A2B3] md:gap-20 mb-2 text-xs ">
                        <p className="">Subtotal</p>
                        <span className="flex">
                          <PiCurrencyNgn size={13} className="mt-0.5" />
                          <p className="text-xs">30,000</p>
                        </span>
                      </span>
                      <span className="flex justify-between text-[#98A2B3] mb-2 text-xs ">
                        <p className="">Subtotal</p>
                        <span className="flex">
                          <PiCurrencyNgn size={13} className="mt-0.5" />
                          <p className="text-xs">110,000</p>
                        </span>
                      </span>
                      <span className="flex justify-between items-center font-semibold  text-sm mobile:pt-4 ">
                        <h6>Total</h6>
                        <span>
                          <h6 className="md:text-sm">
                            {formatCurrency(calculateTotalPrice())}
                          </h6>
                        </span>
                      </span>
                    </div>
                    <div className="md:mt-5 my-5 mobile:order-1">
                      <h3 className="mobile:text-sm text-xs mb-3 font-medium ">
                        Promo & Discount
                      </h3>
                      <input
                        type="text"
                        className=" py-1 text-[#667085] h-8 w-52 text-xs pl-2 bg-[#F2F4F7]  "
                        placeholder="Enter Promo Code"
                      />
                    </div>

                    <Link
                      to="/checkout"
                      className="mobile:order-3 mobile:flex mobile:justify-center mobile:mb-5"
                    >
                      <button className="rounded-md mt-8 mobile:w-full bg-blue-700 hover:bg-blue-500 text-white py-2 px-20 text-sm ">
                        Checkout
                      </button>
                    </Link>

                    <div className="text-right flex justify-center mobile:order-4 mb-5 md:hidden">
                      <Link to="/shop">
                        <p className="text-rblue mobile:text-xs border-b-[1px] border-rblue">
                          Continue shopping
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr className="border-[#D0D5DD] mb-5" />

          <div className="flex items-center my-4">
            <TbBus size={18} className="mr-0.5" />
            <p className=" text-xs">
              <b>Estimated Delivery:</b> Jul 30 - Aug 03
            </p>
          </div>

          <div className="flex items-center mb-5">
            <BsBoxSeam size={14} className="mr-1" />
            <p className="text-xs">
              <b>Free Shipping & Returns:</b> On all orders over
            </p>
            <span className="flex items-center ml-0.5">
              <PiCurrencyNgn size={13} />
              <p className="text-xs pt-0.5">500,000</p>
            </span>
          </div>

          <div className="bg-sblue py-5 md:px-4 md:flex md:justify-center md:items-center md:flex-col md:gap-5 ">
            <img
              src={Cards}
              alt=""
              className="w-[60%] h-[30%] ml-[90px] pb-3 "
            />
            <p className="text-center mobile:text-xs md:font-medium ">
              Guarantee safe and secure checkout
            </p>
          </div>
        </div>
        <CustomersReview />
        <HomePageFooter />
      </div>
    </>
  );
}

export default Cart;
