import { NavLink, Link } from "react-router-dom";

import Image from "../materials/homeimg.png";

import { PiLineVerticalThin } from "react-icons/pi";
import Countdown from "../components/countdown";
import PurpleDress from "../materials/arrival/1.png";
import PinkSuit from "../materials/arrival/4.png";
import LightPink from "../materials/arrival/6.png";
import BlueSuit from "../materials/arrival/3.png";

import PopularProducts1 from "../components/popular1";
import CustomersReview from "../components/customers_review";
import HomePageFooter from "../components/homepagefooter";
import NavBar from "./NavBar";
import MobileNav from "../components/MobileNav";
import Button from "../components/Button";



const HomePage = () => {
  
  return (
    <>
      <div className="mobile:w-full ">
        <div className="mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte ">
          {/* Main Navigation Bar */}
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-12">
            <NavBar >
              <div className="flex gap-4 mobile:hidden">
                <Button style={{ padding: "0.5rem 1rem", color: "#0b69ff" }}>
                  <NavLink to={"/login"}> Log in </NavLink>
                </Button>

                <Button
                  style={{
                    color: "#fafafa",
                    backgroundColor: "#0b69ff",
                    padding: "0.5rem",
                  }}
                >
                  <NavLink to={"/get-started"}> Get started </NavLink>
                </Button>
              </div>
            </NavBar>

            {/* Hamburger Menu Icon for Mobile */}
            <MobileNav />
          </nav>

          {/* Ultimate Sales */}
          <div className="bg-accent rounded-xl mt-12 md:mx-auto md:px-auto mobile:py-4 flex md:gap-72 justify-around">
            {/* gap-[15.625rem] */}
            <div className="mt-10 mobile:mt-5 md:mx-24 mobile:w-full flex flex-col items-center justify-center">
              <h1 className="text-white text-[2.25rem] md:text-[4.125rem] uppercase pb-1.5 tracking-tighter animate-fade-in">
                ultimate
              </h1>
              {/* <img
                src={Sales}
                alt="Sales"
                className="w-[70%] mobile:w-[45%] mobile:h-[17%] h-[15%] mb-8 ml-3 mobile:mb-4 mobile:ml-0 "
              /> */}
              <p className="uppercase text-[4.4375rem] md:text-[7.9375rem] font-Poppins md:font-medium stroke-text text-transparent animate-slide-in leading-[4rem] md:leading-[6rem] tracking-tighter ">
                sales
              </p>

              <div className="mb-6 flex items-center mobile:justify-center gap-3 md:gap-0 w-full text-sm mt-8 mobile:mt-6 font-medium md:text-[1.5625rem] tracking-tight ">
                <p className="text-whyte">Get 25% off </p>
                <PiLineVerticalThin className="text-slate-400" />
                <p className="text-whyte">Free Shipping </p>
              </div>

              <button className="capitalize bg-rblue rounded-[4px] md:rounded-lg md:p-2 w-[8rem] h-[2rem] md:h-[3rem] mobile:py-[4.48px] mobile:px-[31.34px] font-500 md:text-base text-xs mb-5 text-whyte ">
                shop now
              </button>
              <p className="text-whyte font-medium text-sm md:text-[1.25rem] md:tracking-wide pb-2 md:pb-4">
                Hurry, Before It&apos;s Too Late!
              </p>

              <Countdown />
            </div>
            <div>
              <img
                src={Image}
                alt=""
                className="h-full mobile:hidden w-[70%] "
              />
            </div>
          </div>

          {/* New Arrival */}
          <div className="flex gap-4 mt-10 relative">
            <img
              src={PurpleDress}
              alt="Purple Dress"
              className="h-[20%] w-[33%] mobile:w-[47.5%] bg-sblue "
            />
            <div className="flex flex-col h-[20%] w-[33%] mobile:w-[47.5%] ">
              <img
                src={PinkSuit}
                alt="New Arrival"
                className="h-[20%] w-full  "
              />

              <span className="flex flex-col items-center justify-center gap-4 py-[3.2rem] md:py-[3.25rem] ">
                {/* <img
                  src={NewArrival}
                  alt="New Arrival"
                  className="h-[40%] pt-5 w-full mobile:w-[47.5%] "
                /> */}
                
                  <span className="block uppercase text-[3rem] md:text-[5.125rem] font-Poppins font-medium stroke-text1 text-transparent leading-[2rem] md:leading-[4rem] tracking-tighter">New</span>
                  <span className="block uppercase font-Inter font-medium text-[#08100C] text-[2.025rem] md:text-[5rem] tracking-tight">Arrival</span>
                {/* [2.07625rem] */}

                <Link to="/shop">
                  <button className="btn rounded-[4px] md:rounded-[0.5rem] md:py-[0.75rem] md:px-[1.5rem] capitalize bg-[#0b69ff] text-[#fafafa] text-[9.5px] py-[0.28rem] px-[1rem] md:text-base md:leading-[1.7rem] h-[3rem] w-[5rem] md:w-[8rem] md:h-[4.5rem] ">shop now</button>
                </Link>
              </span>
              <img
                src={LightPink}
                alt="New Arrival"
                className="h-[20%] w-full pt-[15px]  "
              />
            </div>

            <img
              src={BlueSuit}
              alt="BlueSuit"
              className="h-[20%] w-[33%] mobile:hidden "
            />

            {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            {/* <div className="flex gap-3 absolute left-64 top-80 md:hidden bg pt-4">
            <FaCircle size={10} className='text-rblue' />
            <FaCircle size={10} className='text-[#667085]'  />
            </div> */}
          </div>

          {/* Popular Products */}
          <h1 className="font-semibold text-base md:text-2xl mt-10 mobile:text-xl pb-5">
            Popular Products
          </h1>
          <PopularProducts1 />
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
