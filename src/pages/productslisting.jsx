import {React, useState} from 'react';
import { PiShareBold, PiShoppingCartBold, IoIosArrowDown, FiSearch, GoHeart, HiStar, IoChevronBackOutline, IoChevronForwardOutline  } from "../icon";
// import { PiShoppingCartBold } from "react-icons/pi";
import Logo from '../materials/logo.png';
// import { IoIosArrowDown } from "react-icons/io";
import User from "../materials/productslisting/user.png";
// import { FiSearch } from "react-icons/fi";
// import { GoHeart } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import Corporates from '../materials/productslisting/1.png';
import Dresas from '../materials/productslisting/2.png';
import Ankara from '../materials/productslisting/3.png';
import Maxi from '../materials/productslisting/4.png';
import Pants from '../materials/productslisting/5.png';
import Jumpsuits from '../materials/productslisting/6.png';
import Casual from '../materials/productslisting/7.png';
import Ready from '../materials/productslisting/8.png';
import TwoPiece from '../materials/productslisting/9.png';
import Skirts from '../materials/productslisting/10.png';
import HomePageFooter from './homepagefooter';
import Corporate from './corporate';
import Dress from './dress';
import Sarah from '../materials/productslisting/23.png';
import Emily from "../materials/customers/2.png";
import Bimpe from "../materials/customers/3.png";


const ProductListing = () => {
    const [cartQuantity, setCartQuantity] = useState(0);

  const handleCartUpdate = (quantity) => {
    setCartQuantity(quantity);
  };
    return (
        <>
           <div className='mobile:w-full w-full '>
          <div className='mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte '>
            {/* Main Navigation Bar */}
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-12">
            <img src={Logo} alt="" className="w-[10%] h-[11%] mobile:w-[34%] mobile:h-[40%] " />


        <div className='flex gap-7 items-center'>
            <ul className=" mobile:hidden flex gap-4 text-[13px] font-Inter font-semibold ">
              <li className=''><NavLink to="/">Home</NavLink></li>
              <li className='text-rblue'><NavLink to="/shop">Shop</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/products">Products</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/home">Contact Us</NavLink></li>
            </ul>

                <span className="bg-transparent border border-[#F2F4F7] rounded-[50%] p-1.5 ">
                <PiShoppingCartBold size={15} className='cursor-pointer' />
                </span>
                 {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex gap- mobile:hidden">
              
              <div className='flex gap-2 items-center'>
              <IoIosArrowDown size={15} />
                <p className='font-medium capitalize text-sm '>hi temi</p>
                <img src={User} alt="" className='h-[75%] w-[20%] rounded-[50%] ' />
              </div>

              <button className=' border border-rblue rounded-md text-rblue py-1.5 px-[12px] active:bg-[#035ceb] '><NavLink to={"/logout"}> Log out </NavLink></button>
              </div>

              </nav> 

                <div className="flex gap-[586px] items-center mb-10">
                    <div className="flex gap-8 items-center font-medium">
                        <p className="bg-blue-700 text-white px-3  rounded-md  font-light capitalize">women</p>
                        <p className="active:bg-blue-700 active:text-white active:px-3  active:rounded-mb active:font-light  capitalize">kiddies</p>
                        <p className="active:bg-blue-700 active:text-white active:px-3  active:rounded-mb active:font-light  capitalize">bridals</p>
                        <p className="active:bg-blue-700 active:text-white active:px-3  active:rounded-mb active:font-light  capitalize">sales</p>
                    </div>

                    
                        <div className=" relative flex gap-3 w-12 ">
                            {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                        <input type="text" className='text-[#344054] text-sm border-none bg-[#F2F4F7] pl-11 py-4 tracking-wide rounded-lg h-10 ' placeholder='Search for Products' />
                        <FiSearch size={22} className='text-[#475467] absolute left-3 top-[8.5px] ' />
                        <span className="bg-transparent border border-[#D0D5DD] rounded-[50%] h-9 w-10 px-2 pt-2 pb-1 ">
                        <PiShareBold size={20} className=' ' />
                        </span>
                        <span className="bg-transparent border border-[#D0D5DD] rounded-[50%] h-9 w-11 p-2">
                        <GoHeart size={20} className=' ' />
                        </span>
                        </div>


                </div>

                <div className="flex  border border-[#D0D5DD] mb-10 h-24 ">
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Corporates} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-3 ">Corporate</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Dresas} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-7">Dress</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Ankara} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-6">Ankara</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Maxi} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-8">Maxi</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Pants} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-8">Pants</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Jumpsuits} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-4">Jumpsuits</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Casual} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                        <p className=" text-sm font-medium pb-3 pl-7">Casual</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={Ready} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-8">RTW</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD] ">
                        <img src={TwoPiece} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-5">Two Piece</p>
                        
                    </span>
                    <span className="flex flex-col w-[125px] pl-2  ">
                        <img src={Skirts} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6 " />
                            <p className=" text-sm font-medium pb-3 pl-8">Skirts</p>
                        
                    </span>
                    
                </div>
                {/* hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."> */}
                <Corporate onCartUpdate={handleCartUpdate}/>

                <Dress onCartUpdate={handleCartUpdate}/>

              </div>
               {/* Customers Review */}
          <div className="bg-sblue w-full ">
            <div className="mt-10 w-full">
            <h1 className='text-3xl font-medium mb-9 text-center pt-16'>Our Customers Review</h1>
            <div className="flex gap-7">
                <div className="flex mobile:hidden bg-white w-[50%] rounded-md mb-5 py-4">
                    <img src={Sarah} alt="Sarah" className="h-[60%] w-[25%] mobile:w-[20%] mr-14 mobile:mr-6 my-auto " />
                    <div className='flex flex-col pr-4 my-auto'>
                        {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                        <p className='font-semibold text-black text-xs leading-5 mobile:w-[40] mb-5'>"Impressive variety of styles and brands. My clothes were perfect fit"</p>
                        <div className="flex mb-4">
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        </div>
                        <hr className='w-32  border-[#98A2B3] ' />
                        <p className='font-semibold text-xl mb-0.5 capitalize  '>sarah j.</p>
                        <p className="text-[11px] font-medium">UI Designer</p>
                    </div>
                </div>

                <div className="flex bg-white w-[60%] rounded-md mb-5 pl-8 py-4 ">
                    <img src={Emily} alt="Emily" className="h-[60%] w-[35%]   mr-14 mobile:mr-2 my-auto " />
                    <div className='flex flex-col pr-1  my-auto'>
                        {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                        <p className='font-semibold text-black text-xs leading-5 w-full mb-1 pt-7'>"Easy to use app with great trends and personalized recommendations. Highly recommended."</p>
                        <div className="flex mb-4">
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        </div>
                        <hr className='w-32  border-[#98A2B3] ' />
                        <p className='font-semibold text-lg capitalize mb- '>emily r.</p>
                        <p className="text-[11px] font-medium">Baker</p>
                    </div>
                </div>

                <div className="flex bg-white w-[50%] mobile:hidden rounded-md mb-5 pl-8 border-r-0">
                    <img src={Bimpe} alt="Bimpe" className="h-[60%] w-[40%] mobile:w-  mr-8 mobile:mr-2 my-auto " />
                    <div className='flex flex-col pr-4 my-auto'>
                        {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                        <p className='font-semibold text-black text-xs leading-5 w-full mb-5'>"I got my exact order and they were perfect fit"</p>
                        <div className="flex mb-4">
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        <HiStar size={15} className='text-warning' />
                        </div>
                        <hr className='w-32  border-[#98A2B3] ' />
                        <p className='font-semibold text-lg capitalize mb- '>bimpe o.</p>
                        <p className="text-[11px] font-medium">Student</p>
                    </div>
                </div>

            </div>

            <div className=" flex justify-center gap-3 pb-14 mt-4 ">
                {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                <span className='bg-white rounded-[50%] p-2'>
                <IoChevronBackOutline size={20} className='text-[#98A2B3] rounded-[50%] cursor-pointer' />
                </span>
                <span className='bg-white rounded-[50%] p-2'>
                <IoChevronForwardOutline size={20} className=' rounded-[50%] active:text-rblue text-rblue cursor-pointer' />
                </span>
            </div>

            </div>
            </div>

            {/* Footer */}

            <HomePageFooter />
              </div>
        </>
    );
};

export default ProductListing;

// import React, { useState } from 'react';
// import { PiShareBold, PiShoppingCartBold, IoIosArrowDown, FiSearch, GoHeart, HiStar, IoChevronBackOutline, IoChevronForwardOutline  } from "../icon";
// import Logo from '../materials/logo.png';
// import User from "../materials/productslisting/user.png";
// import { NavLink } from 'react-router-dom';
// import Corporates from '../materials/productslisting/1.png';
// import Dresas from '../materials/productslisting/2.png';
// import Ankara from '../materials/productslisting/3.png';
// import Maxi from '../materials/productslisting/4.png';
// import Pants from '../materials/productslisting/5.png';
// import Jumpsuits from '../materials/productslisting/6.png';
// import Casual from '../materials/productslisting/7.png';
// import Ready from '../materials/productslisting/8.png';
// import TwoPiece from '../materials/productslisting/9.png';
// import Skirts from '../materials/productslisting/10.png';
// import HomePageFooter from './homepagefooter';
// import Corporate from './corporate';
// import Dress from './dress';
// import Sarah from '../materials/productslisting/23.png';
// import Emily from "../materials/customers/2.png";
// import Bimpe from "../materials/customers/3.png";

// const ProductListing = () => {
//   const [cartQuantity, setCartQuantity] = useState(0);

//   const handleCartUpdate = (quantity) => {
//     setCartQuantity(quantity);
//   };

//   return (
//     <>
//       <div className='mobile:w-full w-full'>
//         <div className='mx-10 mobile:mx-6 mobile:px-6 mobile:bg-red-600 mt-2 w-[94%] bg-whyte'>
//           {/* Main Navigation Bar */}
//           <nav className="flex justify-between mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-12">
//             <img src={Logo} alt="" className="w-[10%] h-[11%] mobile:w-[34%] mobile:h-[40%]" />
//             <div className='flex gap-7 items-center'>
//               <ul className="mobile:hidden flex gap-4 text-[13px] font-Inter font-semibold">
//                 <li><NavLink to="/">Home</NavLink></li>
//                 <li className='text-rblue'><NavLink to="/shop">Shop</NavLink></li>
//                 <li className='active:text-rblue'><NavLink to="/products">Products</NavLink></li>
//                 <li className='active:text-rblue'><NavLink to="/contact-us">Contact Us</NavLink></li>
//               </ul>
//               <span className="bg-transparent border border-[#F2F4F7] rounded-[50%] p-1.5 relative">
//                 <PiShoppingCartBold size={15} className='cursor-pointer' />
//                 {cartQuantity > 0 && (
//                   <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartQuantity}</span>
//                 )}
//               </span>
//             </div>
//             <div className="flex gap- mobile:hidden">
//               <div className='flex gap-2 items-center'>
//                 <IoIosArrowDown size={15} />
//                 <p className='font-medium capitalize text-sm'>hi temi</p>
//                 <img src={User} alt="" className='h-[75%] w-[20%] rounded-[50%]' />
//               </div>
//               <button className='border border-rblue rounded-md text-rblue py-1.5 px-[12px] active:bg-[#035ceb]'><NavLink to={"/logout"}> Log out </NavLink></button>
//             </div>
//           </nav>
//           <div className="flex gap-[586px] items-center mb-10">
//             <div className="flex gap-8 items-center font-medium">
//               <p className="bg-blue-700 text-white px-3 rounded-md font-light capitalize">women</p>
//               <p className="active:bg-blue-700 active:text-white active:px-3 active:rounded-mb active:font-light capitalize">kiddies</p>
//               <p className="active:bg-blue-700 active:text-white active:px-3 active:rounded-mb active:font-light capitalize">bridals</p>
//               <p className="active:bg-blue-700 active:text-white active:px-3 active:rounded-mb active:font-light capitalize">sales</p>
//             </div>
//             <div className="relative flex gap-3 w-12">
//               <input type="text" className='text-[#344054] text-sm border-none bg-[#F2F4F7] pl-11 py-4 tracking-wide rounded-lg h-10' placeholder='Search for Products' />
//               <FiSearch size={22} className='text-[#475467] absolute left-3 top-[8.5px]' />
//               <span className="bg-transparent border border-[#D0D5DD] rounded-[50%] h-9 w-10 px-2 pt-2 pb-1">
//                 <PiShareBold size={20} />
//               </span>
//               <span className="bg-transparent border border-[#D0D5DD] rounded-[50%] h-9 w-11 p-2">
//                 <GoHeart size={20} />
//               </span>
//             </div>
//           </div>
//           <div className="flex border border-[#D0D5DD] mb-10 h-24">
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Corporates} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-3">Corporate</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Dresas} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-7">Dress</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Ankara} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-6">Ankara</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Maxi} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-8">Maxi</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Pants} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-8">Pants</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Jumpsuits} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-4">Jumpsuits</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Casual} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-7">Casual</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={Ready} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-2">Ready to Wear</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2 border-r border-[#D0D5DD]">
//               <img src={TwoPiece} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-5">Two-Piece</p>
//             </span>
//             <span className="flex flex-col w-[125px] pl-2">
//               <img src={Skirts} alt="" className="rounded-[50%] w-[45%] h-[65%] pt-2 mb-2 ml-6" />
//               <p className="text-sm font-medium pb-3 pl-7">Skirts</p>
//             </span>
//           </div>
//           {/* Product List */}
//           <div>
//             <Corporate onCartUpdate={handleCartUpdate} />
//             <Dress />
//           </div>
//         </div>
//       </div>
//       <HomePageFooter />
//     </>
//   );
// };

// export default ProductListing;

