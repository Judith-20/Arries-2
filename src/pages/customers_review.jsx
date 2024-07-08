import React from 'react';
//import { GrFormNext } from "react-icons/gr";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import Sarah from "../materials/customers/1.png"
import Emily from "../materials/customers/2.png"
import Bimpe from "../materials/customers/3.png"
import { HiStar } from "react-icons/hi2";

const CustomersReview = () => {
    return (
        <>
          <div className="bg-sblue w-full mb-1">
            <div className="mt-10">
            <h1 className='text-3xl font-medium mb-9 text-center pt-16'>Our Customers Review</h1>
            <div className="flex gap-4">
                <div className="flex mobile:hidden bg-white w-[50%] rounded-md mb-5">
                    <img src={Sarah} alt="Sarah" className="h-[60%] w-[25%] mobile:w-[20%] mr-14 mobile:mr-6 my-auto " />
                    <div className='flex flex-col pr-4 my-auto'>
                        {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                        <p className='font-semibold text-black text-xs leading-5 w-[90%] mobile:w-[40] mb-5'>"Impressive variety of styles and brands. My clothes were perfect fit"</p>
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

                <div className="flex bg-white w-[60%] rounded-md mb-5 pl-8">
                    <img src={Emily} alt="Emily" className="h-[60%] w-[35%]   mr-14 mobile:mr-2 my-auto " />
                    <div className='flex flex-col pr-4  my-auto'>
                        {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                        <p className='font-semibold text-black text-xs leading-5 w-full mb-5'>"Easy to use app with great trends and personalized recommendations. Highly recommended."</p>
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
                <IoChevronForwardOutline size={20} className='text-[#98A2B3] rounded-[50%] active:text-rblue cursor-pointer' />
                </span>
            </div>

            </div>
          </div>  
        </>
    );
};

export default CustomersReview;
