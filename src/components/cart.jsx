import {
  // TiPlus,
  // PiShoppingCartBold,
  BsDashCircleFill,
  TbBus,
  BsBoxSeam,
  PiCurrencyNgn,
} from "../icon";
import { FaPlus } from "react-icons/fa";
import Cards from "../materials/productslisting/product details/10.png";
import HomePageFooter from "./homepagefooter";
import CustomersReview from "./customers_review";
// import Barbie from "../materials/popular/1.png";
// import Joyce from "../materials/productslisting/24.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "../pages/NavBar";

function formatCurrency(value) {
  const formattedCurrency = new Intl.NumberFormat("en-NG", {
    style:"currency", 
    currency: "NGN",
    // minimumSignificantDigits:"2"
  }).format(value)
  return formattedCurrency
}

function Cart({ cartItems, onAdd, onReduce, onRemove }) {

  // console.log(cartItems);

  // Calculate total price for the cart
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      
  };
  return (
    <>
      <div className="mobile:w-full ">
        <div className="mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte ">
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-8">

           <NavBar cart={cartItems}>
           <button className=" border border-rblue rounded-md text-rblue py-2 px-2 active:bg-[#035ceb] ">
              <NavLink to={"/logout"}> Log out </NavLink>
            </button>
           </NavBar>

            
          </nav>

          <div className="">
            <h1 className="font-medium text-xl text-center ">
              Carts ({cartItems.length})
            </h1>
            <div className="text-right">
              <Link to="/">
              <p className="text-rblue">Continue shopping</p>
              </Link>
              <span className="border-x-0 border-t-[1px] border-b-0 border-rblue px-[70px] "></span>
            </div>
            {/* <button className="text-right border-x-0 border-t-0 border-b-[1px]  text-rblue border-rblue  ">Continue shopping</button> */}
            <hr className="border w-[700px] mb-3" />
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <div className="flex justify-between">
                  <div className="flex flex-col  gap-1">
                    {cartItems?.map((product, index) => (
                      <div key={index} className="flex h-32 gap-[133px] my-2">
                        <span className="flex gap-2">
                          <img
                            src={product.image}
                            alt=""
                            className="h-full w-[45%] "
                          />
                          <span className="pl-1">
                            <h1 className="font-semibold text-lg pt-1 pb-1">
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
                              className="border-x-0 border-t-0 border-b-2 text-sm text-error border-error"
                              onClick={() => onRemove(product.id)}
                            >
                              Remove
                            </button>
                          </span>
                        </span>

                        <div className="flex ">
                          {/* <PiCurrencyNgn
                            size={20}
                            className="text-gray-950 mt-1"
                          /> */}
                          <p className=" text-lg font-semibold">
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
                          <p className="text-sm text-[#98A2B3] "> {product.quantity} </p>

                          <span
                            className="border w-[18px] h-[18px] flex items-center bg-blue-500 text-white rounded-full"
                            onClick={() => onAdd(product.id)}
                          >
                            <FaPlus
                              size={8}
                              className="  ml-[4px] cursor-pointer "
                            />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="pt-4 ml-3 ">
                    <div className="px-">
                      <h2 className="font-semibold text-[15px] pb-3">
                        Summary
                      </h2>
                      <span className="flex justify-between text-[#98A2B3] gap-20 mb-2 text-xs ">
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
                      <span className="flex justify-between font-semibold  text-sm ">
                        <h6 className="">Total</h6>
                        <span className="flex">
                          {/* <PiCurrencyNgn size={15} className="mt-0.5" /> */}
                          {/* <h6 className="text-sm">143,000</h6> */}
                          <h6 className="text-sm">{formatCurrency(calculateTotalPrice())}</h6>
                        </span>
                      </span>
                    </div>
                    <div className="mt-5">
                      <h3 className="text-xs mb-3 font-medium ">
                        Promo & Discount
                      </h3>
                      <input
                        type="text"
                        className=" py-1 text-[#667085] h-8 w-52 text-xs pl-2 bg-[#F2F4F7]  "
                        placeholder="Enter Promo Code"
                      />
                    </div>

                    <Link to="/checkout">
                      <button className="rounded-md mt-8  bg-blue-700 text-white py-2 px-20 text-sm ">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr className="border-[#D0D5DD] mb-5" />

          {/* <p className="mb-1 text-lg"><TbBus size={18}/><b>Estimated Delivery:</b> Jul 30 - Aug 03</p>
                <p className="mb-3 text-lg"><BsBoxSeam size={18}/><b>Free Shipping & Returns:</b> On all orders over <PiCurrencyNgn size={18}/>500,000 </p> */}
          <div className="flex items-center">
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
            <span className="flex items-center ml-0.5 font-semibold">
              <PiCurrencyNgn size={13} />
              <p className="text-xs">500,000</p>
            </span>
          </div>

          <div className="bg-sblue py-5 px-6 mx-4 ">
            <img src={Cards} alt="" className="w-[25%] ml-[420px] mb-2  " />
            <p className="text-center text-[13px] p">
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

Cart.propTypes = {
  cartItems: PropTypes.array,
  onAdd: PropTypes.func,
  onReduce: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Cart;

// {!cartItems.length ?
//   <div className="relative mb-">
//   <span className="bg-transparent border border-[#F2F4F7] rounded-[50%] p-1.5 ">
//     <PiShoppingCartBold size={15} className="cursor-pointer  " />
//   </span>
//   <span className="bg-slate-600">
//     <TiPlus
//       size={9}
//       className="text-rblue absolute left-4 top-5 "
//     />
//   </span>
// </div>
// :
// <CartIcon cart={cartItems} />
// }
