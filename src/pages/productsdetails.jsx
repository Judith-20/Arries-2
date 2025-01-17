import React from 'react';
import Logo from '../materials/logo.png';
import { TiPlus, IoIosAddCircleOutline, GoHeart, VscCircleFilled, TbBus, BsBoxSeam, PiCurrencyNgn, HiStar, PiShoppingCartBold, PiShareBold, BsDashCircleFill } from "../icon";
import { FaPlus } from 'react-icons/fa';
// import { GoHeart } from "react-icons/go";
// import { PiCurrencyNgn } from "react-icons/pi";
import Zee from '../materials/productslisting/product details/1.png';
import Zara from '../materials/productslisting/product details/2.png';
import Beam from '../materials/productslisting/product details/3.png';
import Zamaiah from '../materials/productslisting/product details/4.png';
import Zoe from '../materials/productslisting/product details/5.png';
import Tubo from '../materials/productslisting/product details/6.png';
import Blaze from '../materials/productslisting/product details/7.png';
import Mays from '../materials/productslisting/product details/8.png';
import Tux from '../materials/productslisting/product details/image.png';

import Cards from '../materials/productslisting/product details/10.png';
import HomePageFooter from './homepagefooter';
import CustomersReview from './customers_review';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const ProductsDetails = () => {
    return (
        <>
         <div className='mobile:w-full w-full '>
          <div className='mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte '>

          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-8">
            <img src={Logo} alt="" className="w-[10%] h-[11%] mobile:w-[34%] mobile:h-[40%] " />


            <div className='flex gap-7 items-center'>
            <ul className=" mobile:hidden flex gap-4 text-[13px] font-Inter font-semibold ">
              <li className=''><NavLink to="/">Home</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/shop">Shop</NavLink></li>
              <li className='text-rblue'><NavLink to="/products">Products</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/home">Contact Us</NavLink></li>
            </ul>

                <div className="relative mb-">
                <span className="bg-transparent border border-[#F2F4F7] rounded-[50%] p-1.5 ">
                <PiShoppingCartBold size={15} className='cursor-pointer  ' />
                </span>
                <span className="bg-slate-600">
                <TiPlus size={9} className='text-rblue absolute left-4 top-5 ' />
                </span>
                </div>
            </div>

              <button className=' border border-rblue rounded-md text-rblue py-2 px-2 active:bg-[#035ceb] '><NavLink to={"/logout"}> Log out </NavLink></button>

              </nav>

              <div className="flex justify-end items-center mb-20 ">
                <p className="rounded-[50%] bg-transparent border border-[#D0D5DD] h-10 w-10 pl-2 pt-2 pb-1 mr-3"><PiShareBold size={22} className='mr-3 font-medium ' /></p>
                <p className="rounded-[50%] bg-transparent border border-[#D0D5DD] h-10 w-10 pl-2 pt-2 pb-1 "><GoHeart size={22} className=' font-medium ' /></p>
              </div>

              <div className="flex gap-2 justify-between ">
                <div className="flex flex-col w-[15%] pl-20   gap-1">
                <img src={Zee} alt="" className='h-[10%]  w-[50%] ' />
                <img src={Zara} alt="" className='h-[10%] w-[50%]' />
                <img src={Beam} alt="" className='h-[10%] w-[50%]' />
                <img src={Zamaiah} alt="" className='h-[10%] w-[50%]' />
                <img src={Zoe} alt="" className='h-[10%] w-[50%]' />
                <img src={Tubo} alt="" className='h-[10%] w-[50%]' />
                <img src={Blaze} alt="" className='h-[10%] w-[50%]' />
                <img src={Mays} alt="" className='h-[10%] w-[50%]' />
                
                </div>
                <div className="mr-3 w-[35%] h-[10%]  bg-black  ">
                <img src={Tux} alt="" className='h-[46%] w-full  ' />
                </div>

                <div className='w-[35%]'>
                    <h1 className="  text-xl capitalize font-medium mt-3">blaze dress</h1>
                    <div className="flex items-center pb-6  ">
                    <HiStar size={15} className='text-warning' />
                    <HiStar size={15} className='text-warning' />
                    <HiStar size={15} className='text-warning' />
                    <HiStar size={15} className='text-warning' />
                    <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
                    <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]  ">4.8 (222)</p>
                    
                    <VscCircleFilled size={6} className='text-[#667085] ' />
                    <p className="border-b-2 border-[#667085] pb-1">3 Reviews</p>
                    </div>
                    
                    <div className="flex"><PiCurrencyNgn size={20} className='text-rblue mt-1' /> 
                    <p className="text-rblue font-bold text-lg mb-9">150,000</p>
                    </div>

                    <div className="flex gap-4">

                        <h1 className="text-black text-lg font-semibold">Descriptions <br /> <span className="w-20 pl-20 ml-5 border-2 rounded-none border-t-black border-x-0 border-b-0"></span> </h1>
                        {/* <hr className='w-20 pl-20 border border-black ' /> */}
                        <h1 className="active:text-black text-lg text-[#667085] font-medium ">Specifications</h1>
                        <h1 className="active:text-black text-lg text-[#667085] font-medium ">Details</h1>
                    </div>

                    <p className="text-[#667085] w-full mb-14 ">Classic women's tailored suit from Arries place. Single breasted design, notch lapel, two button closure, tailored fit for a flattering silhouette.</p>

                    <p className="text-sm pb-4 font-medium">Color</p>
                    <div className="flex mb-6 gap-4 items-center">
                        <p className="h-5 w-5 rounded-[50%] bg-[#667085] ring-offset-[1px] ring ring-[#667085] "></p>
                        <p className="active:ring-offset-[1px] active:ring h-6 w-6 active:h-5 active:w-5 active:ring-black  rounded-[50%] bg-black "></p>
                        <p className="active:ring-offset-2 active:ring h-6 w-6 active:h-5 active:w-5 active:ring-warning rounded-[50%] bg-warning "></p>
                        <p className="active:ring-offset-2 active:ring h-6 w-6 active:h-5 active:w-5 active:ring-error rounded-[50%] bg-error "></p>
                        <p className="active:ring-offset-2 active:ring h-6 w-6 active:h-5 active:w-5 active:ring-accent rounded-[50%] bg-accent "></p>
                        </div>

                        <p className="text-sm pb-3 font-medium ">Size</p>
                        <div className="flex gap-2 mb-5 ">
                            {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                            <p className="rounded-sm px-[11px] h-9 pt-1 font-medium border border-[#D0D5DD] active:bg-rblue active:text-white active:font-light ">S</p>
                            <p className="rounded-sm px-[10px] h-9 pt-1 font-medium active:bg-rblue active:text-white active:font-light border border-[#D0D5DD]">M</p>
                            <p className="rounded-sm px-3 h-9 pt-1  bg-rblue text-white border border-[#D0D5DD]">L</p>
                            <p className="rounded-sm px-[8px] h-9 pt-1 font-medium active:bg-rblue active:text-white active:font-light border border-[#D0D5DD]">XL</p>

                            <p className="text-rblue font-medium pt-2 text-sm">See Chart</p>
                            </div>                            
                            <div className="mb-5">
                                <p className="text-sm font-medium pb-1">Quantity</p>

                                <div className=" flex gap-14 mb-12">
                                <div className="flex gap-5 items-center border border-rblue px-2  rounded">
                                    <span className="">
                                    <BsDashCircleFill size={15} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> 
                                    </span>
                                    {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                                    <p className="text-sm text-[#98A2B3] "> 1 </p>

                                    <span className="border w-[18px] h-[18px]  bg-blue-500 text-white rounded-full ">
                                    <FaPlus size={8} className=' mt-[3.5px] ml-[4px] '/>
                                    </span>
                                    </div>

                                    <Link to="/cart"> 
                                    <button className="rounded-lg py-2 px-24 text-sm bg-blue-700 text-white ">Add to cart</button>
                                    </Link>
                                {/* <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> */}
                            </div>

                            <hr className='border-[#D0D5DD] mb-5' />
                            
                            <div className="flex items-center">
                            <TbBus size={18} className='mr-0.5'/>
                            <p className=" text-xs"><b>Estimated Delivery:</b> Jul 30 - Aug 03</p>
                            </div>

                            <div className="flex items-center mb-5">
                            <BsBoxSeam size={14} className='mr-1'/>
                            <p className="text-xs"><b>Free Shipping & Returns:</b> On all orders over </p>
                            <span className="flex items-center ml-0.5">
                            <PiCurrencyNgn size={13}/>
                            <p className="text-xs pt-0.5">500,000</p>
                            </span>
                            </div>
                            

                            <div className="bg-sblue py-5 px-4 w-[450px] ">
                            <img src={Cards} alt="" className="w-[60%] h-[30%] ml-[90px] pb-3 " />
                            <p className="text-center text-xs font-medium ">Guarantee safe and secure checkout</p>
                            </div>

                        </div>
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
