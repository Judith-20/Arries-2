import FooterLogo from "../materials/Desktop/footerlogo.png";
import { IoLogoInstagram, FaFacebook } from "../icon";
// import { FaFacebook } from "react-icons/fa";

const HomePageFooter = () => {
  return (
    <>
      <footer className="w-full mobile:grid mobile:justify-center mobile:items-center bg-rblue">
        <div className="md:flex md:justify-between grid grid-cols-1 px-4 py-8 md:py-16 md:pl-14 md:pr-20 ">
          <div className=" flex flex-col mobile:justify-center items-center">
            <img
              src={FooterLogo}
              alt=""
              className=" md:w-[46%] md:h-[60%] h-[50%] w-[50%] md:left-16 md:bottom-[66px] "
            />
            <button className="bg-white px-[10rem] py-[1.23625rem] md:px-8 md:py-[.7rem] md:rounded-md rounded-[9.89px] font-medium text-sm text-rblue">
              Download App on IOS & Android
            </button>
          </div>

          <div className="flex mobile:justify-between mobile:pr-10 md:gap-8 ">
            <div className="flex mobile:flex-col w-full mobile:gap-y-10 md:justify-between">
              <div className="flex flex-col md:gap-2 gap-6 font-medium text-sm capitalize text-white">
                <h1 className="md:font-semibold md:text-xs font-bold text-base uppercase ">
                  customer service
                </h1>
                <a href="" className="no-underline cursor-pointer">
                  orders & delivery
                </a>
                <a href="" className="no-underline cursor-pointer">
                  payment & pricing
                </a>
                <a href="" className="no-underline cursor-pointer">
                  returns and refunds
                </a>
                <a href="" className="no-underline cursor-pointer ">
                  FAQs
                </a>
                <a href="" className="no-underline cursor-pointer">
                  locations
                </a>
              </div>

              <div className="flex flex-col md:gap-2 gap-6 font-medium text-sm capitalize text-white">
                <h1 className="md:font-semibold md:text-xs font-bold text-base uppercase ">
                  about
                </h1>
                <a href="" className="no-underline cursor-pointer">
                  about us
                </a>
                <a href="" className="no-underline cursor-pointer">
                  careers
                </a>
                <a href="" className="no-underline cursor-pointer">
                  sitemap
                </a>
                <a href="" className="no-underline cursor-pointer">
                  privacy policy
                </a>
                <a href="" className="no-underline cursor-pointer">
                  terms & conditions
                </a>
              </div>
            </div>

            <div className="flex flex-col md:gap-2 gap-6 font-medium text-sm capitalize w-[8rem] text-white">
              <h1 className="md:font-semibold md:text-xs font-bold text-base uppercase ">
                help
              </h1>
              <a href="" className="no-underline cursor-pointer">
                contact us
              </a>
              <a href="" className="no-underline cursor-pointer">
                follow us
              </a>
              <div className="flex cursor-pointer gap-3">
                <IoLogoInstagram size={21} className="md:text-error" />
                <FaFacebook size={20} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePageFooter;
