import React from 'react';
import PinkDress from '../materials/popular/1.png';
import DarkBlueDress from '../materials/popular/2.png';
import SkyBlueGown from '../materials/popular/3.png';
import CreamDress from '../materials/popular/4.png';
import TraditionalDress from '../materials/popular/5.png';
import WhiteDress from '../materials/popular/6.png';
import BabyDress from '../materials/popular/7.png';
import RedPants from '../materials/popular/8.png';
//import { CiStar } from "react-icons/ci";
//import { IoHeart } from "react-icons/io5";
import { BsDashCircleFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiCurrencyNgn } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
//import { FaStar } from 'react-icons/fa';
// import { TiStar } from "react-icons/ti";
import { HiStar } from "react-icons/hi2";

const PopularProducts = () => {
    return (
        <>
           <div className="flex flex-wrap gap-5 mobile: w-full">

            <div className="flex flex-col w-[23.8%] mobile:w-[47%] ">
              <img src={PinkDress} alt="Barbie Dress" className='h-[65%] mobile:h-[60%] w-full  ' />
              <div className='flex justify-between items-center pt-2.5 mobile:pt-2 mobile:w-full '>
              <p className='font-bold text-  capitalize '>barbie dress</p>
              <GoHeartFill size={16} className='text-error pr-1 mr-4 mobile:mr-1' />
              </div>
              <p className="text-sm leading-3 mobile:text-[8.2px] text-[#98A2B3]  w-[90%] pb-1.5 mobile:pb-0 ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold mobile:pl-0.5 ' /><p className='font-extrabold text-lg mobile:text-sm '>15,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer mobile:pr-1' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

            <div className="flex flex-col w-[23.8%] mobile:w-[47%]">
              <img src={DarkBlueDress} alt="Barbie Dress" className='h-[65%] w-full  ' />
              <div className='flex justify-between pt-2.5 '>
              <p className='font-bold text-lg  capitalize '>barbie dress</p>
              <GoHeart size={16} className='text-error mr-2' />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
              <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>32,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

            <div className="flex flex-col w-[23.8%] mobile:w-47">
              <img src={SkyBlueGown} alt="Angel Dress" className='h-[65%] w-full  ' />
              <div className='flex justify-between pt-2.5 '>
              <p className='font-bold text-lg  capitalize '>angel dress</p>
              <GoHeart size={16} className='text-error mr-2' />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
              <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>25,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

            <div className="flex flex-col w-[23.8%] ">
              <img src={CreamDress} alt="Bebe Dress" className='h-[65%] w-full  ' />
              <div className='flex justify-between pt-2.5 '>
              <p className='font-bold text-lg  capitalize '>bebe dress</p>
              <GoHeartFill size={16} className='text-error mr-2' />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
              <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>15,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

            <div className="flex flex-col w-[23.8%] mt-4 ">
              <img src={TraditionalDress} alt="" className='h-[65%] w-full  ' />
              <div className='flex justify-between pt-2.5 '>
              <p className='font-bold text-lg  capitalize '>jem dress</p>
              <GoHeartFill size={16} className='text-error mr-2' />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
              <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>55,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

            <div className="flex flex-col w-[23.8%] mt-4 ">
              <img src={WhiteDress} alt="" className='h-[65%] w-full  ' />
              <div className='flex justify-between pt-2.5 '>
              <p className='font-bold text-lg  capitalize '>tubo dress</p>
              <GoHeart size={16} className='text-error mr-2' />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
              <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>220,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

           <div className="flex flex-col w-[23.8%] mt-4 ">
              <img src={BabyDress} alt="" className='h-[65%] w-full  ' />
              <div className='flex justify-between pt-2.5 '>
              <p className='font-bold text-lg  capitalize '>princess dress</p>
              <GoHeartFill size={16} className='text-error mr-2' />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
              <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>55,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

            <div className="flex flex-col w-[23.8%] mt-4">
              <img src={RedPants} alt="" className='h-[65%] w-full  ' />
              <div className='flex justify-between pt-2.5 '>
              <p className='font-bold text-lg  capitalize '>leo dress</p>
              <GoHeartFill size={16} className='text-error mr-2' />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
              </div>
              <div className="flex items-center justify-between ">
              <span className="flex items-center">
                    <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>15,000</p>
                </span>
                <span className="flex items-center ">
                    <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

            </div>

          </div>
 
        </>
    );
};

export default PopularProducts;
