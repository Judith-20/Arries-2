import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import PinkDress from "../materials/popular/1.png";
import DarkBlueDress from "../materials/popular/2.png";
import SkyBlueGown from "../materials/popular/3.png";
import CreamDress from "../materials/popular/4.png";
import TraditionalDress from "../materials/popular/5.png";
import WhiteDress from "../materials/popular/6.png";
import BabyDress from "../materials/popular/7.png";
import RedPants from "../materials/popular/8.png";
import {
  BsDashCircleFill,
  IoIosAddCircleOutline,
  PiCurrencyNgn,
  GoHeartFill,
  HiStar,
  GoHeart,
} from "../icon";

const products = [
  {
    image: PinkDress,
    title: "Barbie Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "15,000",
  },
  {
    image: DarkBlueDress,
    title: "Barbie Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "32,000",
  },
  {
    image: SkyBlueGown,
    title: "Angel Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "25,000",
  },
  {
    image: CreamDress,
    title: "Bebe Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "15,000",
  },
  {
    image: TraditionalDress,
    title: "Jem Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "55,000",
  },
  {
    image: WhiteDress,
    title: "Tubo Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "220,000",
  },
  {
    image: BabyDress,
    title: "Princess Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "55,000",
  },
  {
    image: RedPants,
    title: "Leo Dress",
    desc: "Elegant summer dress made with plain silk",
    review: "4.8(222)",
    price: "15,000",
  },
];

function PopularProducts1() {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 gap-y-12 bg-whyte ">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          style={{
            padding: ".5rem .75rem",
            color: "#035ceb",
            right: ".5rem",
            bottom: "1.25rem",
            marginBottom: "4rem",
            marginTop: "2rem",
          }}
        >
          View more
        </Button>
      </div>
    </>
  );
}

function Product({ product }) {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleIncrease() {
    setCount((c) => c + 1);
  }
  function handleDecrease() {
    // if (count < 0) return
    setCount((c) => (c <= 0 ? 0 : c - 1));
  }

  //   function handleIconToggle() {
  //     setIcon(!icon)
  //   }

  return (
    <div className="rounded-[.85rem] flex flex-col gap-y-1 items-start hover:-translate-y-1 hover:scale-100 duration-500  ">
      {/**shadow-md hover:scale-105 */}
      <img src={product.image} alt={product.title} />
      <span className="flex flex-col w-full">
        <span className="flex items-center justify-between font-bold text-lg mt-2">
          {product.title}

          {isOpen ? (
            <GoHeartFill
              onClick={() => setIsOpen(false)}
              size={14}
              className="text-error mr-4 mobile:mr-1 cursor-pointer"
            />
          ) : (
            <GoHeart
              onClick={() => setIsOpen(true)}
              size={14}
              className="text-error mr-4 mobile:mr-1 cursor-pointer"
            />
          )}
          {/* pr-1 mr-4 */}
        </span>
        <p className="text-sm font-medium mobile:leading-3 mobile:text-[8.2px] text-[#98A2B3] w-[93%] mobile:pb-0">
          {product.desc}
        </p>{" "}
        {/* pb-1.5 */}
      </span>
      <span className="flex items-center gap-1">
        <span className="flex gap-[.05rem] items-center">
          <HiStar size={15} className="text-warning" />
          <HiStar size={15} className="text-warning" />
          <HiStar size={15} className="text-warning" />
          <HiStar size={15} className="text-warning" />
          <HiStar size={16} className="text-[#E4E7EC]" />
        </span>
        <span className="text-[#667085] font-medium text-xs mobile:text-[8.1px] pt-[.2rem]">
          {product.review}
        </span>
      </span>
      <span className="flex items-center gap-[9.5rem] ">
        <span className="flex items-center font-bold text-lg mobile:text-sm">
          <PiCurrencyNgn size={18} className=" mobile:pl-0.5" />
          {product.price}
        </span>
        <span className="flex items-center">
          <BsDashCircleFill
            size={17}
            className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
            onClick={handleDecrease}
          />
          <p className="">{count}</p>
          <IoIosAddCircleOutline
            size={21}
            className="ml-2 cursor-pointer mobile:pr-1"
            onClick={handleIncrease}
          />
        </span>
      </span>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,

    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    review: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default PopularProducts1;
