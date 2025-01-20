import React from "react";
import {
  BsDashCircleFill,
  IoIosAddCircleOutline,
  PiCurrencyNgn,
  GoHeart,
  GoHeartFill,
  HiStar,
} from "../icon";
// import { BsDashCircleFill, IoIosAddCircleOutline, PiCurrencyNgn, GoHeart, GoHeartFill, HiStar, IoChevronForwardOutline, IoChevronBackOutline  } from "../icon";
import Barbie from "../materials/popular/1.png";
import Angel from "../materials/popular/3.png";
import Bebe from "../materials/popular/4.png";
import Zara from "../materials/productslisting/18.png";
import Neon from "../materials/productslisting/19.png";
import More from "../materials/productslisting/20.png";
import Choc from "../materials/productslisting/21.png";
import Aisy from "../materials/productslisting/22.png";

const Dress = () => {
  return (
    <>
      <div className="">
        <div className="mb-10 ">
          <h1 className="text-xl font-semibold mb-4 ">Dress</h1>
          <div className="flex flex-wrap gap-5 mobile: w-full relative">
            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%] ">
              <img
                src={Barbie}
                alt="Barbie Dress"
                className="h-[65%] mobile:h-[60%] w-full  "
              />
              <div className="flex justify-between items-center pt-2.5 mobile:pt-2 mobile:w-full ">
                <p className="font-bold capitalize ">barbie dress</p>
                <GoHeartFill
                  size={16}
                  className="text-error pr-1 mr-4 mobile:mr-1"
                />
              </div>
              <p className="text-sm mobile:text-[8.2px] text-[#98A2B3]  w-[90%] pb-1.5 mobile:pb-0 ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn
                    size={18}
                    className="text-bold mobile:pl-0.5 "
                  />
                  <p className="font-extrabold text-lg mobile:text-sm ">
                    15,000
                  </p>
                </span>
                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer mobile:pr-1"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%]">
              <img src={Zara} alt="Zara Dress" className="h-[65%] w-full  " />
              <div className="flex justify-between pt-2.5 ">
                <p className="font-bold text-lg  capitalize ">zara dress</p>
                <GoHeartFill size={16} className="text-error mr-2" />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn size={18} className="text-bold " />
                  <p className="font-extrabold text-lg ">25,000</p>
                </span>
                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-47">
              <img src={Angel} alt="Beam Dress" className="h-[65%] w-full  " />
              <div className="flex justify-between pt-2.5 ">
                <p className="font-bold text-lg  capitalize ">angel dress</p>
                <GoHeart size={16} className="text-error mr-2" />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn size={18} className="text-bold " />
                  <p className="font-extrabold text-lg ">25,000</p>
                </span>
                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] ">
              <img src={Bebe} alt="Bebe Dress" className="h-[65%] w-full  " />
              <div className="flex justify-between pt-2.5 ">
                <p className="font-bold text-lg  capitalize ">bebe dress</p>
                <GoHeartFill size={16} className="text-error mr-2" />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn size={18} className="text-bold " />
                  <p className="font-extrabold text-lg ">15,000</p>
                </span>
                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4 ">
              <img src={Neon} alt="Zoe Dress" className="h-[65%] w-full  " />
              <div className="flex justify-between pt-2.5 ">
                <p className="font-bold text-lg  capitalize ">noen dress</p>
                <GoHeartFill size={16} className="text-error mr-2" />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn size={18} className="text-bold " />
                  <p className="font-extrabold text-lg ">12,000</p>
                </span>

                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4 ">
              <img src={More} alt="" className="h-[65%] w-full  " />
              <div className="flex justify-between pt-2.5 ">
                <p className="font-bold text-lg  capitalize ">more dress</p>
                <GoHeartFill size={16} className="text-error mr-2" />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn size={18} className="text-bold " />
                  <p className="font-extrabold text-lg ">220,000</p>
                </span>
                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4 ">
              <img src={Choc} alt="" className="h-[65%] w-full  " />
              <div className="flex justify-between pt-2.5 ">
                <p className="font-bold text-lg  capitalize ">choc dress</p>
                <GoHeartFill size={16} className="text-error mr-2" />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn size={18} className="text-bold " />
                  <p className="font-extrabold text-lg ">35,000</p>
                </span>
                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>

            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4">
              <img src={Aisy} alt="" className="h-[65%] w-full  " />
              <div className="flex justify-between pt-2.5 ">
                <p className="font-bold text-lg  capitalize ">aisy dress</p>
                <GoHeartFill size={16} className="text-error mr-2" />
              </div>
              <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">
                Elegant summer dress made with plain silk
              </p>

              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

              <div className="flex items-center w-[70.2%] pb-2  ">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] font-medium text-xs  ">
                  4.8 (222)
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <span className="flex items-center">
                  <PiCurrencyNgn size={18} className="text-bold " />
                  <p className="font-extrabold text-lg ">55,000</p>
                </span>
                <span className="flex items-center pr-2 ">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 cursor-pointer"
                  />{" "}
                  1{" "}
                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer"
                  />
                </span>
              </div>
              {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dress;
