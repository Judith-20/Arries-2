import { React, useState } from 'react';
import { IoMenu, IoClose  } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Logo from '../materials/logo.png';
import Image from '../materials/homeimg.png';
import Sales from '../materials/sales.png';
import { PiLineVerticalThin } from "react-icons/pi";
import Countdown from '../materials/components/countdown';
import PurpleDress from '../materials/arrival/1.png';
import PinkSuit from '../materials/arrival/4.png';
import NewArrival from '../materials/arrival/5.png';
import LightPink from '../materials/arrival/6.png';
import BlueSuit from '../materials/arrival/3.png';
import PopularProducts from './popular';
import CustomersReview from './customers_review';
import HomePageFooter from './homepagefooter';
import { Link } from 'react-router-dom';
//import { FaCircle } from "react-icons/fa";

const HomePage = () => {
  // State to handle the navbar's open/close status
  const [openNav, setOpenNav] = useState(true);

  // Function to toggle the navbar's visibility
  const ToggleNavBar = () => {
      setOpenNav(!openNav);
  };
    return (
        <>
          <div className='mobile:w-full '>
          <div className='mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte '>
            {/* Main Navigation Bar */}
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-12">
            <img src={Logo} alt="" className="w-[10%] h-[11%] mobile:w-[34%] mobile:h-[40%] " />



            <ul className=" mobile:hidden flex gap-5 text-[13px] font-Inter font-semibold ">
              <li className='text-rblue'><NavLink to="/">Home</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/shop">Shop</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/products">Products</NavLink></li>
              <li className='active:text-rblue'><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>

            <div className="flex gap-4 mobile:hidden">
              <button className='border border-rblue rounded-md px-4 text-rblue active:bg-[#035ceb]  ' ><NavLink to={"/login"}> Log in </NavLink></button>
              <button className='bg-rblue border border-rblue rounded-md text-whyte py-2 px-2 active:bg-[#035ceb] '><NavLink to={"/get-started"}> Get started </NavLink></button>
              </div>

              {/* Hamburger Menu Icon for Mobile */}
              <div className='md:hidden' onClick={ToggleNavBar}>
                 {/* Toggle between open and close icons based on openNav state */}
                 {!openNav ? <IoClose size={28} className='mr-10'/> : <IoMenu size={30} className='text-rblue mr-10'/>}
              </div>
              <div className={!openNav ? 'left-10 fixed top-40 w-[40%] bg-whyte pl-4 py-5 text-center px-1 border-2 rounded-md ease-in-out duration-500 md:hidden' : "fixed left-full ease-in-out duration-500"}>


              <ul className=" p-3 mobile:mb-2 text-sm block space-y-4 pt-8 font-bold ">
              <li className='active:text-rblue'> <NavLink to={"/"}> Home </NavLink> </li>
              <li className='active:text-rblue' ><NavLink to={"/shop"}> Shop </NavLink></li>
              <li className='active:text-rblue'><NavLink to={"/products"}> Products </NavLink></li>
              <li className='active:text-rblue'><NavLink to={"/home"}> Contact Us </NavLink></li>
            </ul>

            <div className="">
              <button className='border border-rblue rounded-md px-9 text active:bg-[#035ceb] text-rblue py-2 block mb-2 ml-28 ' ><NavLink to={"/login"}> Log in </NavLink></button>
              <button className='bg-rblue border border-rblue rounded-md text-whyte py-2.5 px-4  active:bg-[#035ceb] '><NavLink to={"/get-started"}> Get started </NavLink></button>
              </div>

              </div>
          </nav> 

          {/* Ultimate Sales */}
          <div className="bg-accent rounded-xl mt-12 mx-auto px-auto mobile:px- flex gap-72  justify-around">
            <div className="mt-10 mobile:mt-5 ml-32 mobile:ml-[70px]">
              <h1 className="text-white text-5xl mobile:text-4xl pl-8 mobile:pl-6 uppercase pb-1.5 ">ultimate</h1>
              <img src={Sales} alt="Sales" className='w-[70%] mobile:w-full mobile:h-[17%] h-[15%] mb-8 ml-3 mobile:mb-4 mobile:ml-0 mobile:mr-10 '  />
              
              <div className='mb-6 flex items-center gap-3 text-lg mobile:text-sm mobile:mt-6 mobile:font-light '>
              <p className="text-whyte  ">Get 25% off </p>
              <PiLineVerticalThin className='text-slate-400' />
              <p className='text-whyte'>Free Shipping </p>

              </div>

              <button className="capitalize bg-rblue rounded-md py-2 px-4 mobile:px-2 mobile:py-1.5 font-light text-xs mb-5 ml-24 mobile:ml-[78px] text-whyte ">shop now</button>
              <p className="text-whyte font-light text-sm tracking-wide ml-10 mobile:ml-5 pb-2">Hurry, Before It's Too Late!</p>
              
              <Countdown />

            </div>
            <div >
            <img src={Image} alt="" className="h-full mobile:hidden w-[70%] " />
            </div>
          </div>

          {/* New Arrival */}
          <div className="flex gap-4 mt-10 relative">
            <img src={PurpleDress} alt="Purple Dress" className="h-[20%] w-[33%] mobile:w-[47.5%] bg-sblue " />
            <div className="flex flex-col h-[20%] w-[33%] mobile:w-[47.5%] ">
            <img src={PinkSuit} alt="New Arrival" className="h-[20%] w-full  " />

            <span className="relative mb-40">
            <img src={NewArrival} alt="New Arrival" className="h-[40%] pt-5 w-full mobile:w-[47.5%] " />
            
            <Link to="/shop">
            <button className="capitalize bg-rblue rounded-lg py-3 px-6 font-medium text-lg text-whyte absolute left-[140px] top-64  ">shop now</button>
            </Link>
            </span>

            <img src={LightPink} alt="New Arrival" className="h-[20%] w-full pt-[15px]  " />
            
            </div>

            <img src={BlueSuit} alt="BlueSuit" className="h-[20%] w-[33%] mobile:hidden " />

            {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            {/* <div className="flex gap-3 absolute left-64 top-80 md:hidden bg pt-4">
            <FaCircle size={10} className='text-rblue' />
            <FaCircle size={10} className='text-[#667085]'  />
            </div> */}
          </div>

          {/* Popular Products */}
          <h1 className='font-semibold text-2xl mt-10 mobile:text-xl pb-5'>Popular Products</h1>
          <PopularProducts />
          
          </div>
          {/* Customers Review */}
          <CustomersReview />

          {/* Footer */}
          <HomePageFooter />

          </div>
        </>
    );
};

export default HomePage;


// import { React, useState } from 'react';
// import { IoMenu, IoClose } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import Logo from '../materials/logo.png';
// import Image from '../materials/homeimg.png';
// import Sales from '../materials/sales.png';
// import { PiLineVerticalThin } from "react-icons/pi";
// import Countdown from '../materials/components/countdown';
// import PurpleDress from '../materials/arrival/1.png';
// import NewArrival from '../materials/arrival/2.png';
// import BlueSuit from '../materials/arrival/3.png';
// import PopularProducts from './popular';
// import CustomersReview from './customers_review';
// import HomePageFooter from './homepagefooter';

// const HomePage = () => {
//   const [openNav, setOpenNav] = useState(true);

//   const ToggleNavBar = () => {
//     setOpenNav(!openNav);
//   };

//   return (
//     <>
//       <div className=''>
//         <div className='mx-10  mt-2  w-[94%] bg-whyte '>
//           {/* Main Navigation Bar */}
//           <nav className="hidden md:flex justify-between items-center bg-whyte mb-12">
//             <img src={Logo} alt="" className="w-[10%] h-[11%] mobile:w-[12%] mobile:h-[15%]" />

//             <ul className=" mobile:hidden flex gap-5 text-[13px] font-Inter font-semibold ">
//               <li className='text-rblue'><NavLink to="/">Home</NavLink></li>
//               <li><NavLink to="/shop">Shop</NavLink></li>
//               <li><NavLink to="/products">Products</NavLink></li>
//               <li><NavLink to="/contact-us">Contact Us</NavLink></li>
//             </ul>

//             <div className="flex gap-4">
//               <button className='border border-rblue rounded-md px-4 text active:bg-[#035ceb]'><NavLink to="/login">Log in</NavLink></button>
//               <button className='bg-rblue border border-rblue rounded-md text-whyte py-2 px-2 active:bg-[#035ceb]'><NavLink to="/get-started">Get started</NavLink></button>
//             </div>

//             <div className='md:hidden' onClick={ToggleNavBar}>
//               {!openNav ? <IoClose size={20} /> : <IoMenu size={20} className='text-rblue' />}
//             </div>
//             <div className={!openNav ? 'left-[0%] fixed top-0 w-[40%] bg-whyte h-full pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-full ease-in-out duration-500"}>
//               <ul className="p-3 text-sm block space-y-4 pt-8 font-bold">
//                 <li className='text-rblue'><NavLink to="/">Home</NavLink></li>
//                 <li><NavLink to="/shop">Shop</NavLink></li>
//                 <li><NavLink to="/products">Products</NavLink></li>
//                 <li><NavLink to="/contact-us">Contact Us</NavLink></li>
//               </ul>

//               <div className="">
//                 <button className='border border-rblue rounded-md px-4 text active:bg-[#035ceb] w-[80%]'><NavLink to="/login">Log in</NavLink></button>
//                 <button className='bg-rblue border border-rblue rounded-md text-whyte py-2 px-2 active:bg-[#035ceb]'><NavLink to="/get-started">Get started</NavLink></button>
//               </div>
//             </div>
//           </nav>

//           {/* Ultimate Sales */}
//           <div className="bg-accent rounded-lg mt-112  mx-auto px-auto flex gap-72  justify-around">
//             <div className="mt-10 ml-32">
//               <h1 className="text-white text-5xl pl-8 uppercase pb-1">ultimate</h1>
//               <img src={Sales} alt="Sales" className='w-[70%] h-[15%] mb-8 ml-3' />
//               <div className='mb-6 flex items-center gap-3 text-lg'>
//                 <p className="text-whyte">Get 25% off</p>
//                 <PiLineVerticalThin className='text-slate-400' />
//                 <p className='text-whyte'>Free Shipping</p>
//               </div>
//               <button className="capitalize bg-rblue rounded-md py-2 px-4 font-light text-xs mb-5 ml-24 text-whyte">shop now</button>
//               <p className="text-whyte font-light text-sm tracking-wide ml-10 pb-2">Hurry, Before It's Too Late!</p>
//               <Countdown />
//             </div>
//             <div>
//               <img src={Image} alt="" className="h-full w-[70%]" />
//             </div>
//           </div>

//           {/* New Arrival */}
//           <div className="flex gap-3 mt-10">
//             <img src={PurpleDress} alt="Purple Dress" className="h-[20%] w-[33%] bg-sblue" />
//             <img src={NewArrival} alt="New Arrival" className="h-[20%] w-[33%]" />
//             <img src={BlueSuit} alt="BlueSuit" className="h-[20%] w-[32%]" />
//           </div>

//           {/* Popular Products */}
//           <h1 className='font-semibold text-2xl mt-10'>Popular Products</h1>
//           <PopularProducts />
//         </div>
//         <CustomersReview />
//         <HomePageFooter />
//       </div>
//     </>
//   );
// };

// export default HomePage;
