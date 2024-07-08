import React from 'react';
import { PiShareBold } from "react-icons/pi";
import { PiShoppingCartBold } from "react-icons/pi";
import Logo from '../materials/logo.png';
import { IoIosArrowDown } from "react-icons/io";
import User from "../materials/productslisting/user.png";
import { BiSolidSearch } from "react-icons/bi";

const ProductListing = () => {
    return (
        <>
           <div className='mobile:w-full '>
          <div className='mx-10 mobile:mx-6 mobile:px-6 mobile:bg-red-600 mt-2  w-[94%] bg-whyte '>
            {/* Main Navigation Bar */}
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-12">
            <img src={Logo} alt="" className="w-[10%] h-[11%] mobile:w-[34%] mobile:h-[40%] " />


        <div className='flex gap-5'>
            <ul className=" mobile:hidden text-[13px] font-Inter font-semibold ">
              <li className=''><NavLink to="/">Home</NavLink></li>
              <li className='text-rblue'><NavLink to="/shop">Shop</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/products">Products</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>

                <PiShoppingCartBold size={15} />
            </div>

            <div className="flex gap-4 mobile:hidden">
              
              <div className='flex gap-2'>
              <IoIosArrowDown size={15} />
                <p className='font-medium capitalize'>hi temi</p>
                <img src={User} alt="" className='h-[20%] w-[20%] ' />
              </div>
              <button className=' border border-rblue rounded-md text-rblue py-2 px-2 active:bg-[#035ceb] '><NavLink to={"/logout"}> Log out </NavLink></button>
              </div>

              </nav> 

                <div className="flex justify-between">
                    <div className="flex gap-4 font-medium">
                        <p className="bg-rblue text-white px-2 py-1 rounded-sm capitalize">women</p>
                        <p className="active:bg-rblue active:text-white active:px-2 active:py-1 active:rounded-sm capitalize">kiddies</p>
                        <p className="active:bg-rblue active:text-white active:px-2 active:py-1 active:rounded-sm capitalize">bridals</p>
                        <p className="active:bg-rblue active:text-white active:px-2 active:py-1 active:rounded-sm capitalize">sales</p>
                    </div>
                    <div className="">
                        <p className=""></p>
                        <p className=""></p>
                        <p className=""></p>
                        <p className=""></p>
                    </div>
                </div>
              </div>
              </div>
        </>
    );
};

export default ProductListing;
