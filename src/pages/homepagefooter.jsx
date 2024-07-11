import React from 'react';
import FooterLogo from '../materials/Desktop/footerlogo.png';
import { IoLogoInstagram, FaFacebook } from "../icon";
// import { FaFacebook } from "react-icons/fa";

const HomePageFooter = () => {
    return (
        <>
          <footer className="w-full bg-rblue">
            <div className="flex gap-60 py-16 pl-14">
                <div className="  relative ">
                    <img src={FooterLogo} alt="" className='absolute w-[46%] h-[60%] left-16 bottom-[66px] ' />
                    <button className="bg-white mt-12 px-4 py-1 rounded-md font-medium text-sm text-rblue">Download App on IOS & Android</button>
                </div>

                <div className="flex gap-20 ml-32">
                <div className="flex flex-col gap-2 text-white">
                    <h1 className="font-semibold text-xs uppercase ">customer service</h1>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">orders & delivery</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">payment & pricing</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">returns and refunds</a>
                    <a href="" className="no-underline cursor-pointer text-xs font-light">FAQs</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">locations</a>
                </div>

                <div className="flex flex-col gap-2 text-white pr-8 mr-8">
                    <h1 className="font-semibold text-xs uppercase ">about</h1>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">about us</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">careers</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">sitemap</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">privacy policy</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">terms & conditions</a>
                </div>

                <div className="flex flex-col gap-2 text-white">
                    <h1 className="font-semibold text-xs uppercase ">help</h1>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">contact us</a>
                    <a href="" className="no-underline cursor-pointer capitalize text-xs font-light">follow us</a>
                    <div className="flex gap-3">
                    <IoLogoInstagram size={21} className='text-error' />
                    <FaFacebook size={20}  />
                    </div>
                </div>

                </div>
            </div>
          </footer>  
        </>
    );
};

export default HomePageFooter;
