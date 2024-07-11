import React from 'react';
import Logo from '../materials/logo.png';
import { IoIosAddCircle, FaPlus, TiPlus, PiShoppingCartBold, MdEdit, PiCurrencyNgn, BsDashCircleFill } from "../icon";;
import Barbie from '../materials/popular/1.png';
import HomePageFooter from './homepagefooter';
import Card from '../materials/productslisting/product details/checkcard.png';
import { NavLink } from 'react-router-dom';
import Joyce from "../materials/productslisting/24.png"

const Checkout = () => {
    return (
        <>
         <div className='mobile:w-full '>
          <div className='mx-10 mobile:mx-6 mobile:px-6 0 mt-2  w-[94%] bg-whyte '>

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

                {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
              <div className="">
                <h1 className="font-medium mb-8 text-xl text-center ">Checkout</h1>
                <div className="flex justify-between pb-2 text-[#98A2B3] text-sm  ">
                    <p className="">Product</p>
                    <p className="">Price</p>
                    <p className="">Quantity</p>
                    <p className="">Total</p>
                </div>
                <hr className=' border-[#D0D5DD] mb-4' />

                    
                
                    <div className="flex flex-col  gap-1">
                        <div className="flex h-32 justify-between mt-2">
                            <span className="flex gap-2">
                                <img src={Barbie} alt="" className="h-full w-[45%] " />
                                <span className="pl-1">
                                    <h1 className="font-semibold text-lg pt-4 pb-1">Barbie Set</h1>
                                    <p className="pb-1 text-sm font-medium">Color: Pink, Blue </p>
                                    <p className="pb-1 text-sm font-medium">Size: M, L</p>
                                </span>
                            </span>
                    <div className="flex ">
                        <PiCurrencyNgn size={20} className='text-gray-950 mt-1' />
                        <p className=" text-lg font-semibold">15,000</p>
                        </div>

                    <div className="flex gap-5 h-10 items-center border border-rblue px-2  rounded">
                        <span className="">
                            <BsDashCircleFill size={15} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> 
                        </span>
                        <p className="text-sm text-[#98A2B3] "> 1 </p>

                        <span className="border w-[18px] h-[18px]  bg-blue-500 text-white rounded-full ">
                        <FaPlus size={9} className=' mt-[3.5px] ml-[3.1px] cursor-pointer '/>
                        </span>

                    </div>
                    <div className="flex ">
                        <PiCurrencyNgn size={20} className='text-gray-950 mt-1' />
                        <p className=" text-lg font-semibold">15,000</p>
                        </div>

                        
                    </div>

                    <div className="flex h-32 justify-between mt-2">
                            <span className="flex gap-2 mb-2 ">
                                <img src={Joyce} alt="" className="h-full w-[55%] " />
                                <span className="pl-1">
                                    <h1 className="font-semibold text-lg pt-4 pb-1">Barbie Set</h1>
                                    <p className="pb-1 text-sm font-medium">Color: Pink, Blue </p>
                                    <p className="pb-1 text-sm font-medium">Size: M, L</p>
                                </span>
                            </span>
                    <div className="flex ">
                        <PiCurrencyNgn size={20} className='text-gray-950 mt-1' />
                        <p className=" text-lg font-semibold">55,000</p>
                        </div>

                    <div className="flex gap-5 h-10 items-center border border-rblue px-2  rounded">
                        <span className="">
                            <BsDashCircleFill size={15} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> 
                        </span>
                        <p className="text-sm text-[#98A2B3] "> 1 </p>

                        <span className="border w-[18px] h-[18px]  bg-blue-500 text-white rounded-full ">
                        <FaPlus size={9} className=' mt-[3.5px] ml-[3.5px] cursor-pointer '/>
                        </span>

                    </div>
                    <div className="flex ">
                        <PiCurrencyNgn size={20} className='text-gray-950 mt-1' />
                        <p className=" text-lg font-semibold">55,000</p>
                        </div>
                    </div> 

                    </div>


                

                

              </div>
              <hr className=' border-[#D0D5DD] mb-4' />

               <div className="flex justify-between  mt-10 mb-8">
                <div className="mb-6 mr-72 ">
                    <div className="flex pl-2 pr-5 justify-between items-center bg-[#F2F4F7] mb-5 w-[450px] ">
                        <span className="py-3">
                            <h6 className="text-xs font-semibold pb-2">Shipping Address</h6>
                            <p className="text-xs">12, Jimoh Lawal street, Alimosho Lagos.</p>
                        </span>
                        <span className="bg-rblue w-5 h-5 rounded-[50%] "><MdEdit size={13} className='text-white ml-1 mt-0.5 ' /></span>
                    </div>

                    <div className="flex pl-2 pr-5 justify-between items-center bg-[#F2F4F7] mb-5 w-[450px] ">
                        <span className="py-3">
                            <h6 className="text-xs font-medium pb-2">Contact Information</h6>
                            <p className="text-[10px]">+23400009000 <br />Raynejay@gmail.com</p>
                        </span>
                        <span className="bg-rblue w-5 h-5 rounded-[50%] "><MdEdit size={13} className='text-white ml-1 mt-0.5 ' /></span>
                    </div>
                    <hr className=" border-[#D0D5DD] w-[158px] ml-[290px] " />
                    <span className=" flex justify-end gap-7 ">
                        <p className="text-error font-medium text-xs">Shipping Fee</p>

                        <span className="flex">
                        <PiCurrencyNgn size={13} className='mt-[1px]' />
                        <p className="text-xs">3,000</p>
                        </span>

                    </span>
                    <hr className=" border-[#D0D5DD] w-[158px] ml-[290px] " />

                </div>

                <div className="rounded-2xl bg-[#F2F4F7] pt-5 px-4 flex flex-col">
                    <div className="flex justify-between">
                        <p className="text-sm font-semibold mb-1">Payment Method</p>
                        <span className="bg-rblue w-5 h-5 rounded-[50%] "><MdEdit size={13} className='text-white ml-1 mt-0.5' /></span>
                    </div>

                    <p className="bg-white w-12 text-rblue text-xs py-1 pl-[10px] mb-6 rounded-lg font-medium ">Card</p>

                    <div className="flex justify-between">
                    <img src={Card} alt="" className='h-[85%]  ' />
                    <span className="bg-rblue w-4 h-8 rounded-[8px] "><FaPlus size={12} className='text-white ml-0.5 mt-[9px]' /></span>
                    </div>

                </div>

                <hr className="border border-[#D0D5DD] " />

               </div>


              </div>
              <HomePageFooter />   
              </div>   
        </>
    );
};

export default Checkout;
