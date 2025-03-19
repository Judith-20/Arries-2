import Logo from "../materials/logo.png";
import {
  // TiPlus,
  GoHeart,
  VscCircleFilled,
  TbBus,
  BsBoxSeam,
  PiCurrencyNgn,
  HiStar,
  // PiShoppingCartBold,
  PiShareBold,
  BsDashCircleFill,
  IoChevronBackOutline,
} from "../icon";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// import Tux from "../materials/productslisting/product details/image.png";

import Cards from "../materials/productslisting/product details/10.png";
import { tabProducts } from "./data";
import { tabProductDetails } from "./data";
import Colors from "./Colors";
import CartIcon from "./CartIcon";

import Tabs from "./Tabs";
import HomePageFooter from "./homepagefooter";
import CustomersReview from "./customers_review";
// import NavBar from "../pages/NavBar";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthContext";
import MobileNav from "./MobileNav";

const ProductsDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(25);
  const [quantities, setQuantities] = useState(
    tabProducts.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );

  const { dispatch } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const handleIncrease = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const handleDecrease = (id) => {
    setQuantities({
      ...quantities,
      [id]: Math.max(quantities[id] - 1, 0),
    });
  };

  function handleSelectedProduct(id) {
    setSelectedProduct(id);
  }

  function formatCurrency(value) {
    const formattedCurrency = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumSignificantDigits: "2",
    }).format(value);
    return formattedCurrency;
  }

  // Find the selected product
  const selectedProductDetails = tabProducts.find(
    (product) => product.id === selectedProduct
  );

  const tabProductDetailsStyle = {
    // color: "#667085",
    // fontSize: "1.125rem",
    // lineHeight: "1.75rem",
    // fontWeight: "600",
    display: "flex",
  };

  // filtered products for mobile view
  const filteredProducts = [
    tabProducts[0],
    tabProducts[1],
    tabProducts[tabProducts.length - 1],
  ];

  const pStyle = {
    margin: "0.5rem 0",
    color: "#667085",
  };

  const sizes = [
    {
      title: "S",
    },
    {
      title: "L",
    },
    {
      title: "M",
    },
    {
      title: "XL",
    },
  ];

  const sizeStyle = {
    borderRadius: "0.125rem",
    padding: "0.25rem 0.69rem 0",
    height: "2.25rem",
    fontWeight: "500",
    border: "1px solid #D0D5DD",
  };

  return (
    <>
      <div className="mobile:w-full w-full">
        <div className="mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte ">
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-8">
            <img
              src={Logo}
              alt=""
              className="w-[10%] h-[11%] mobile:w-[34%] mobile:h-[40%] "
            />

            <div className="flex gap-7 items-center mobile:hidden">
              <ul className=" mobile:hidden flex gap-4 text-[13px] font-Inter font-semibold ">
                <li className="">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link-active hover:bg-[#0b69ff] hover:p-4"
                        : "transition-all duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="active:text-rblue">
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link-active hover:bg-[#0b69ff] hover:p-4"
                        : "transition-all duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="text-rblue">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link-active hover:bg-[#0b69ff] hover:p-4"
                        : "transition-all duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li className="active:text-rblue">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link-active hover:bg-[#0b69ff] hover:p-4"
                        : "transition-all duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>

              <CartIcon />
            </div>

            <button
              className=" border border-rblue rounded-md text-rblue py-2 px-2 active:bg-[#035ceb] mobile:hidden "
              onClick={handleLogout}
            >
              {" "}
              Log out
            </button>
            <MobileNav />
          </nav>

          <div className="flex justify-between items-center mb-10 md:mb-20 w-full">
            <IoChevronBackOutline
              size={22}
              className="cursor-pointer md:hidden" 
              onClick={() => navigate(-1)}
            />
            <div className="flex items-center justify-end w-full ">
              <p className="rounded-[50%] bg-transparent border border-[#D0D5DD] h-10 w-10 pl-2 pt-2 pb-1 mr-3">
                <PiShareBold size={22} className="mr-3 font-medium " />
              </p>
              <p className="rounded-[50%] bg-transparent border border-[#D0D5DD] h-10 w-10 pl-2 pt-2 pb-1 ">
                <GoHeart size={22} className=" font-medium " />
              </p>
            </div>
          </div>

          <div className="flex mobile:flex-col mobile:w-full gap-2 md:justify-between ">
            <div className="flex flex-col w-[15%] pl-20 mobile:hidden gap-1">
              {tabProducts.map((product) => (
                <div key={product.id} className="">
                  <ul
                    className="h-[10%]  w-[50%]"
                    onClick={() => handleSelectedProduct(product.id)}
                  >
                    <li
                      className={`${
                        selectedProduct === product.id
                          ? "border-2 border-black p-1 "
                          : ""
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={`${product.title} Dress`}
                        className=""
                      />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center items-center md:hidden mt-4 gap-1 order-2">
              {filteredProducts.map((product) => (
                <div key={product.id} className="">
                  <ul
                    className="h-[10%]  w-[50%]"
                    onClick={() => handleSelectedProduct(product.id)}
                  >
                    <li
                      className={`${
                        selectedProduct === product.id
                          ? "border-2 border-black p-1 "
                          : ""
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={`${product.title} Dress`}
                        className=""
                      />
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="mr-3 w-[35%] mobile:w-full h-[10%] mobile:order-1  bg-black ">
              {selectedProductDetails && (
                <img
                  src={selectedProductDetails.image}
                  alt={`${selectedProductDetails.title} Dress`}
                  className="h-full w-full aspect-auto"
                />
              )}
            </div>

            <div className="md:w-[35%] order-3">
              {selectedProductDetails ? (
                <>
                  <div className="mobile:flex mobile:items-center mobile:justify-between">
                    <div className="">
                      <h1 className="text-xl capitalize font-bold md:font-medium mt-3">
                        {/* blaze dress */}
                        {selectedProductDetails.title}Dress
                      </h1>
                      <div className="flex items-center mobile:gap-1 pb-6  ">
                        <HiStar size={15} className="text-warning" />
                        <HiStar size={15} className="text-warning" />
                        <HiStar size={15} className="text-warning" />
                        <HiStar size={15} className="text-warning" />
                        <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                        <p className="text-[#667085] font-medium text-xs  ">
                          4.8 (222)
                        </p>

                        <VscCircleFilled size={6} className="text-[#667085] " />
                        <p className="border-b-2 border-[#667085] text-xs text-[#667085]">
                          3 Reviews
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <p className="text-rblue font-bold text-lg mb-9">
                        {formatCurrency(selectedProductDetails.price)}
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <Tabs
                      tabs={tabProductDetails}
                      state="Descriptions"
                      className="tab-product-details"
                      divStyle={tabProductDetailsStyle}
                      pStyle={pStyle}
                    />
                  </div>

                  <p className="text-sm pb-2 md:pb-4 mobile:pt-8  font-medium">Color</p>
                  <div className="flex mb-6 gap-4 items-center">
                    <Colors />
                  </div>

                  <p className="text-sm pb-3 font-medium ">Size</p>
                  <div className="flex gap-3 mb-5 items-center ">
                    {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                    <Tabs
                      tabs={sizes}
                      state="S"
                      className="size-style"
                      divStyle={sizeStyle}
                    />
                    <a href="" className="text-rblue font-medium text-sm">
                      See Chart
                    </a>
                  </div>
                  <div className="mb-5 mobile:mt-6">
                    <p className="text-sm font-medium pb-1">Quantity</p>

                    <div className=" flex gap-14 mb-12">
                      <div className="flex gap-5 items-center border border-rblue px-2  rounded">
                        <span className="">
                          <BsDashCircleFill
                            size={15}
                            className="text-[#D0D5DD] mr-2  cursor-pointer"
                            onClick={() =>
                              handleDecrease(selectedProductDetails.id)
                            }
                          />
                        </span>
                        {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                        <p className="text-sm text-[#98A2B3] ">
                          {" "}
                          {quantities[selectedProductDetails.id]}{" "}
                        </p>

                        <span className="border w-[18px] h-[18px] flex items-center bg-blue-500 text-white rounded-full cursor-pointer ">
                          <FaPlus
                            size={8}
                            className=" ml-[4px] "
                            onClick={() =>
                              handleIncrease(selectedProductDetails.id)
                            }
                          />
                        </span>
                      </div>

                      <button
                        className="rounded-lg py-2 px-24 text-sm bg-blue-700 text-white "
                        onClick={() =>
                          // onAddProducts({
                          //   ...selectedProductDetails,
                          //   quantity:
                          //     quantities[selectedProductDetails.id] || 1,
                          // })
                          dispatch({
                            type: "addToCart",
                            payload: {
                              ...selectedProductDetails,
                              quantity:
                                quantities[selectedProductDetails.id] || 1,
                            },
                          })
                        }
                      >
                        Add to cart
                      </button>
                      {/* <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> */}
                    </div>

                    <hr className="border-[#D0D5DD] mb-5" />

                    <div className="flex items-center mobile:my-4">
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

                    <div className="bg-sblue py-5 md:px-4 md:w-[450px] ">
                      <img
                        src={Cards}
                        alt=""
                        className="w-[60%] h-[30%] ml-[90px] pb-3 "
                      />
                      <p className="text-center text-xs md:font-medium ">
                        Guarantee safe and secure checkout
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p>Select a Product</p>
              )}
            </div>
          </div>
        </div>
        <CustomersReview />
        <HomePageFooter />
      </div>
    </>
  );
};

export default ProductsDetails;

// {
//   tabProducts.map(product => (
//     <div key={product.id} className="">
//       {selectedProductDetails ? (
//   <>
//     <h1 className="  text-xl capitalize font-medium mt-3">
//       {/* blaze dress */}
//       {selectedProductDetails.title}
//     </h1>
//     <div className="flex items-center pb-6  ">
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
//       <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]  ">
//         4.8 (222)
//       </p>

//       <VscCircleFilled size={6} className="text-[#667085] " />
//       <p className="border-b-2 border-[#667085] pb-1">
//         3 Reviews
//       </p>
//     </div>

//     <div className="flex">
//       <PiCurrencyNgn size={20} className="text-rblue mt-1" />
//       <p className="text-rblue font-bold text-lg mb-9">
//         {/* 150,000 */}
//         {selectedProductDetails.price}
//       </p>
//     </div>
//     </>
//   ) : (
//   <p>Select a Product</p>
// )}

//     <div className="">
//       <Tabs
//         tabs={tabProductDetails}
//         state="Descriptions"
//         className="tab-product-details"
//         divStyle={tabProductDetailsStyle}
//         pStyle={pStyle}
//       />
//     </div>

//     <p className="text-sm pb-4 font-medium">Color</p>
//     <div className="flex mb-6 gap-4 items-center">
//       <Colors />
//     </div>

//     <p className="text-sm pb-3 font-medium ">Size</p>
//     <div className="flex gap-3 mb-5 items-center ">
//       {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 *
//       <Tabs
//         tabs={sizes}
//         state="S"
//         className="size-style"
//         divStyle={sizeStyle}
//       />
//       <a href="" className="text-rblue font-medium text-sm">
//         See Chart
//       </a>
//     </div>
//     <div className="mb-5">
//       <p className="text-sm font-medium pb-1">Quantity</p>

//       <div className=" flex gap-14 mb-12">
//         <div className="flex gap-5 items-center border border-rblue px-2  rounded">
//           <span className="">
//             <BsDashCircleFill
//               size={15}
//               className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
//             />
//           </span>
//           {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 *
//           <p className="text-sm text-[#98A2B3] "> 1 </p>

//           <span className="border w-[18px] h-[18px]  bg-blue-500 text-white rounded-full ">
//             <FaPlus size={8} className=" mt-[3.5px] ml-[4px] " />
//           </span>
//         </div>

//         <Link to="/cart">
//           <button className="rounded-lg py-2 px-24 text-sm bg-blue-700 text-white ">
//             Add to cart
//           </button>
//         </Link>
//         {/* <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> *
//       </div>

//       <hr className="border-[#D0D5DD] mb-5" />

//       <div className="flex items-center">
//         <TbBus size={18} className="mr-0.5" />
//         <p className=" text-xs">
//           <b>Estimated Delivery:</b> Jul 30 - Aug 03
//         </p>
//       </div>

//       <div className="flex items-center mb-5">
//         <BsBoxSeam size={14} className="mr-1" />
//         <p className="text-xs">
//           <b>Free Shipping & Returns:</b> On all orders over
//         </p>
//         <span className="flex items-center ml-0.5">
//           <PiCurrencyNgn size={13} />
//           <p className="text-xs pt-0.5">500,000</p>
//         </span>
//       </div>

//       <div className="bg-sblue py-5 px-4 w-[450px] ">
//         <img
//           src={Cards}
//           alt=""
//           className="w-[60%] h-[30%] ml-[90px] pb-3 "
//         />
//         <p className="text-center text-xs font-medium ">
//           Guarantee safe and secure checkout
//         </p>
//       </div>
//     </div>
//     </div>
//   ))
// }
