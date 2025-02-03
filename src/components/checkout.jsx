// import { FaPlus, MdEdit, PiCurrencyNgn, BsDashCircleFill } from "../icon";
import { FaPlus, BsDashCircleFill } from "../icon";
import HomePageFooter from "./homepagefooter";
import Billing from "./Billing";
// import Card from "../materials/productslisting/product details/checkcard.png";
import { NavLink } from "react-router-dom";

import NavBar from "../pages/NavBar";
import PropTypes from "prop-types";

function formatCurrency(value) {
  const formattedCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumSignificantDigits:"2"
  }).format(value);
  return formattedCurrency;
}

function Checkout({ cart, onAdd, onReduce, onRemove }) {
  // const calculateTotalPrice = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // };
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
            <NavBar cart={cart}>
              <button className=" border border-rblue rounded-md text-rblue py-2 px-2 active:bg-[#035ceb] ">
                <NavLink to={"/logout"}> Log out </NavLink>
              </button>
            </NavBar>
          </nav>
          {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
          <div className="">
            <h1 className="font-medium mb-8 text-xl text-center ">Checkout</h1>
            <div className="flex space-x-[18rem] pb-2.5 text-[#98A2B3] text-sm  ">
              <p className="">Product</p>
              <p className="pl-[10rem]">Price</p>
              <p className="">Quantity</p>
              <p className="">Total</p>
            </div>
            <hr className=" border-[#D0D5DD] " />

            <div className="flex flex-col  gap-1 py-4">
              {cart?.map((product, index) => (
                <div key={index} className="flex h-32 space-x-56 my-2">
                  <span className="flex">
                    <img
                      src={product.image}
                      alt=""
                      className="h-full w-[45%] "
                    />
                    <span className="pl-3">
                      <h1 className="font-semibold text-lg pt-1 pb-1">
                        {product.title} Set
                      </h1>
                      <p className="pb-1 text-sm font-medium">
                        Color: Pink, Blue
                      </p>
                      <p className="pb-1 text-sm font-medium">Size: M, L</p>
                      {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

                      <button
                        className="border-x-0 border-t-0 border-b-2 text-sm text-error border-error"
                        onClick={() => onRemove(product.id)}
                      >
                        Remove
                      </button>
                    </span>
                  </span>

                  <div className="flex">
                    <p className=" text-lg font-semibold pr">
                      {formatCurrency(product.price)}
                    </p>
                  </div>

                  <div className="flex gap-5 h-10 items-center border border-rblue px-2  rounded">
                    <span className="flex items-center">
                      <BsDashCircleFill
                        size={15}
                        className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                        onClick={() => onReduce(product.id)}
                      />
                    </span>
                    {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                    <p className="text-sm text-[#98A2B3] ">
                      {product.quantity}
                    </p>

                    <span
                      className="border w-[18px] h-[18px] flex items-center bg-blue-500 text-white rounded-full"
                      onClick={() => onAdd(product.id)}
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
          <hr className=" border-[#D0D5DD]" />
          <div className="w-full flex items-end justify-end">
            <span className=" flex flex-col font-medium">
            <p className="text-error text-[0.65rem] border-b border-[#D0D5DD] pt-1 pb-0.5 mb-2 flex justify-between gap-4 ">
              Subtotal
              <span className=" text-black font-semibold">{formatCurrency(subtotal)}</span>
             
            </p>
            <p className="text-error text-[0.65rem] border-b border-[#D0D5DD] py-0.5 flex justify-between gap-4">
              Shipping Fee
              <span className=" text-black font-semibold">{formatCurrency(shippingFee)}</span>
            </p>
            <p className=" font-medium mt-2 flex justify-between items-center gap-4">
              Total:
              <span className="text-rblue text-[0.9rem] font-semibold tracking-wide">{formatCurrency(total)}</span>
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

Checkout.propTypes = {
  cart: PropTypes.array,
  onAdd: PropTypes.func,
  onReduce: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Checkout;

{
  /* <span className="flex gap-2">
                  <img src={Barbie} alt="" className="h-full w-[45%] " />
                  <span className="pl-1">
                    <h1 className="font-semibold text-lg pt-4 pb-1">
                      Barbie Set
                    </h1>
                    <p className="pb-1 text-sm font-medium">
                      Color: Pink, Blue
                    </p>
                    <p className="pb-1 text-sm font-medium">Size: M, L</p>
                  </span>
                </span>
                <div className="flex ">
                  <PiCurrencyNgn size={20} className="text-gray-950 mt-1" />
                  <p className=" text-lg font-semibold">15,000</p>
                </div>

                <div className="flex gap-5 h-10 items-center border border-rblue px-2  rounded">
                  <span className="">
                    <BsDashCircleFill
                      size={15}
                      className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                    />
                  </span>
                  <p className="text-sm text-[#98A2B3] "> 1 </p>

                  <span className="border w-[18px] h-[18px]  bg-blue-500 text-white rounded-full ">
                    <FaPlus
                      size={9}
                      className=" mt-[3.5px] ml-[3.1px] cursor-pointer "
                    />
                  </span>
                </div>
                <div className="flex ">
                  <PiCurrencyNgn size={20} className="text-gray-950 mt-1" />
                  <p className=" text-lg font-semibold">15,000</p>
                </div> 
                
                <div className="flex h-32 justify-between mt-2">
                <span className="flex gap-2 mb-2 ">
                  <img src={Joyce} alt="" className="h-full w-[55%] " />
                  <span className="pl-1">
                    <h1 className="font-semibold text-lg pt-4 pb-1">
                      Barbie Set
                    </h1>
                    <p className="pb-1 text-sm font-medium">
                      Color: Pink, Blue{" "}
                    </p>
                    <p className="pb-1 text-sm font-medium">Size: M, L</p>
                  </span>
                </span>
                <div className="flex ">
                  <PiCurrencyNgn size={20} className="text-gray-950 mt-1" />
                  <p className=" text-lg font-semibold">55,000</p>
                </div>

                <div className="flex gap-5 h-10 items-center border border-rblue px-2  rounded">
                  <span className="">
                    <BsDashCircleFill
                      size={15}
                      className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                    />
                  </span>
                  <p className="text-sm text-[#98A2B3] "> 1 </p>

                  <span className="border w-[18px] h-[18px]  bg-blue-500 text-white rounded-full ">
                    <FaPlus
                      size={9}
                      className=" mt-[3.5px] ml-[3.5px] cursor-pointer "
                    />
                  </span>
                </div>
                <div className="flex ">
                  <PiCurrencyNgn size={20} className="text-gray-950 mt-1" />
                  <p className=" text-lg font-semibold">55,000</p>
                </div>
              </div>
                
                */
}
