import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HomePageFooter from "./homepagefooter";
import NavBar from "../pages/NavBar";

import {
  PiShareBold,
  IoIosArrowDown,
  FiSearch,
  GoHeart,
  HiStar,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "../icon";

import Corporates from "../materials/productslisting/1.png";
import Dresas from "../materials/productslisting/2.png";
import Ankara from "../materials/productslisting/3.png";
import Maxi from "../materials/productslisting/4.png";
import Pants from "../materials/productslisting/5.png";
import Jumpsuits from "../materials/productslisting/6.png";
import Casual from "../materials/productslisting/7.png";
import Ready from "../materials/productslisting/8.png";
import TwoPiece from "../materials/productslisting/9.png";
import Skirts from "../materials/productslisting/10.png";
import Corporate from "./corporate";
import Dress from "./dress";
import Sarah from "../materials/productslisting/23.png";
import Emily from "../materials/customers/2.png";
import Bimpe from "../materials/customers/3.png";
import User from "../materials/productslisting/user.png";
import { useAuth } from "../contexts/AuthContext";
import MobileNav from "./MobileNav";
import MobileProductsView from "./MobileProductsView";
import CustomersReview from "./customers_review";

// for the tabs
const tabs = [
  {
    title: "Women",
    id: 1,
  },
  {
    title: "Kiddies",
    id: 2,
  },
  {
    title: "Bridals",
    id: 3,
  },
  {
    title: "Sales",
    id: 4,
  },
];

// for the names of the outfits
const outfitNames = [
  {
    image: Corporates,
    text: "Corporate",
  },
  {
    image: Dresas,
    text: "Dress",
  },
  {
    image: Ankara,
    text: "Ankara",
  },
  {
    image: Maxi,
    text: "Maxi",
  },
  {
    image: Pants,
    text: "Pants",
  },
  {
    image: Jumpsuits,
    text: "Jumpsuits",
  },
  {
    image: Casual,
    text: "Casual",
  },
  {
    image: Ready,
    text: "RTW",
  },
  {
    image: TwoPiece,
    text: "Two Piece",
  },
  {
    image: Skirts,
    text: "Skirts",
  },
];

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("Women");
  const [input, setInput] = useState("");

  function handleTabClick(tab) {
    setSelectedTab(tab);
  }

  return (
    <div className="">
      <span className="flex justify-end gap-3 md:hidden">
      <span className="bg-transparent border border-[#D0D5DD] rounded-[50%] h-9 w-9 px-2 pt-2 pb-1 mb-8 ">
          <PiShareBold size={20} className=" " />
        </span>
        <span className="bg-transparent border border-[#D0D5DD] rounded-[50%] h-9 w-9 p-2">
          <GoHeart size={20} className=" " />
        </span>
      </span>
      <div className="flex justify-between items-center mb-6 md:mb-10">
      <div className="flex md:gap-8 mobile:w-full mobile:justify-between items-center font-medium">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer ${
              selectedTab === tab.title
                ? "bg-blue-700 text-whyte pt-0.5 px-3 font-light rounded-md transition-colors duration-300 "
                : ""
            }`}
            onClick={() => handleTabClick(tab.title)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className=" relative md:flex gap-3 hidden  ">
          {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
          {/* w-12 */}
        <input
          type="text"
          className="text-[#344054] text-sm border-none bg-[#F2F4F7] pl-11 py-4 tracking-wide rounded-lg h-10 "
          placeholder="Search for Products"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FiSearch
          size={22}
          className="text-[#475467] absolute left-3 top-[8.5px] "
        />
        <span className="bg-transparent flex items-center justify-center border border-[#D0D5DD] rounded-[50%] h-10 w-10 ">
          <PiShareBold size={20} className=" " />
        </span>
        <span className="bg-transparent flex items-center justify-center border border-[#D0D5DD] rounded-[50%] h-10 w-10 ">
          <GoHeart size={20} className=" " />
        </span>
      </div>
    </div>
    </div>
  );
}

function OutfitNames() {
  return (
    <div className="md:flex md:border md:border-[#D0D5DD] md:border-r-0 md:mb-10 mb-14 h-[8rem] ">
      <ul className="list-none mobile:border mobile:border-[#D0D5DD] md:flex grid grid-cols-5 justify-evenly">
        {outfitNames.map((outfit, index) => (
          <li
            key={index}
            className="border md:border-r border-[#D0D5DD] md:px-[1.427rem] md:py-3 py-2 flex flex-col items-center justify-center"
          >
            <img src={outfit.image} alt={outfit.text} className="md:w-20 w-[2.49125rem] " />
            <span className="mobile:text-sm font-medium">{outfit.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ProductListing = () => {
  // const [count, setCount] = useState(0);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <div className="mobile:w-full w-full ">
        <div className="mx-10 mobile:mx-6 mobile:px-6  mt-2  w-[94%] bg-whyte ">
          {/* Main Navigation Bar */}
          <nav className=" flex justify-between  mobile:mt-10 mobile:pt-6 items-center bg-whyte mb-12">
            <NavBar>
              <div className="flex gap- mobile:hidden">
                <div className="flex gap-2 items-center">
                  <IoIosArrowDown size={15} />
                  {/* <p className="font-medium capitalize text-sm ">hi temi</p> */}
                  <p className="font-medium capitalize text-sm ">
                    hi {user.username}
                  </p>
                  <img
                    src={User}
                    alt=""
                    className="h-[75%] w-[20%] rounded-[50%] "
                  />
                </div>

                <button
                  className=" border border-rblue rounded-md text-rblue py-1.5 px-[12px] active:bg-[#035ceb] "
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </NavBar>
            <MobileNav />
          </nav>

          <Tabs />

          <OutfitNames />
          <Corporate />

          <Dress />
          <MobileProductsView />
        </div>
        {/* Customers Review */}
        <CustomersReview />
        {/* <div className="bg-sblue w-full ">
          <div className="mt-10 w-full">
            <h1 className="text-3xl font-medium mb-9 text-center pt-16">
              Our Customers Review
            </h1>
            <div className="flex gap-7">
              <div className="flex mobile:hidden bg-white w-[50%] rounded-md mb-5 py-4">
                <img
                  src={Sarah}
                  alt="Sarah"
                  className="h-[60%] w-[25%] mobile:w-[20%] mr-14 mobile:mr-6 my-auto "
                />
                <div className="flex flex-col pr-4 my-auto">
                 
                  <p className="font-semibold text-black text-xs leading-5 mobile:w-[40] mb-5">
                    &#34;Impressive variety of styles and brands. My clothes
                    were perfect fit&#34;
                  </p>
                  <div className="flex mb-4">
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                  </div>
                  <hr className="w-32  border-[#98A2B3] " />
                  <p className="font-semibold text-xl mb-0.5 capitalize  ">
                    sarah j.
                  </p>
                  <p className="text-[11px] font-medium">UI Designer</p>
                </div>
              </div>

              <div className="flex bg-white w-[60%] rounded-md mb-5 pl-8 py-4 ">
                <img
                  src={Emily}
                  alt="Emily"
                  className="h-[60%] w-[35%]   mr-14 mobile:mr-2 my-auto "
                />
                <div className="flex flex-col pr-1  my-auto">
                  <p className="font-semibold text-black text-xs leading-5 w-full mb-1 pt-7">
                    &#34;Easy to use app with great trends and personalized
                    recommendations. Highly recommended.&#34;
                  </p>
                  <div className="flex mb-4">
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                  </div>
                  <hr className="w-32  border-[#98A2B3] " />
                  <p className="font-semibold text-lg capitalize mb- ">
                    emily r.
                  </p>
                  <p className="text-[11px] font-medium">Baker</p>
                </div>
              </div>

              <div className="flex bg-white w-[50%] mobile:hidden rounded-md mb-5 pl-8 border-r-0">
                <img
                  src={Bimpe}
                  alt="Bimpe"
                  className="h-[60%] w-[40%] mobile:w-  mr-8 mobile:mr-2 my-auto "
                />
                <div className="flex flex-col pr-4 my-auto">
                  <p className="font-semibold text-black text-xs leading-5 w-full mb-5">
                    &#34;I got my exact order and they were perfect fit&#34;
                  </p>
                  <div className="flex mb-4">
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                    <HiStar size={15} className="text-warning" />
                  </div>
                  <hr className="w-32  border-[#98A2B3] " />
                  <p className="font-semibold text-lg capitalize mb- ">
                    bimpe o.
                  </p>
                  <p className="text-[11px] font-medium">Student</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-center gap-3 pb-14 mt-4 ">
              <span className="bg-white rounded-[50%] p-2">
                <IoChevronBackOutline
                  size={20}
                  className="text-[#98A2B3] rounded-[50%] cursor-pointer"
                />
              </span>
              <span className="bg-white rounded-[50%] p-2">
                <IoChevronForwardOutline
                  size={20}
                  className=" rounded-[50%] active:text-rblue text-rblue cursor-pointer"
                />
              </span>
            </div>
          </div>
        </div> */}

        {/* Footer */}

        <HomePageFooter />
      </div>
    </>
  );
};

export default ProductListing;
