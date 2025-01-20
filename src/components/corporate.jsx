import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import Zee from "../materials/productslisting/11.png";
import Zara from "../materials/productslisting/12.png";
import Beam from "../materials/productslisting/13.png";
import Zamaiah from "../materials/productslisting/14.png";
import Zoe from "../materials/productslisting/15.png";
import Tubo from "../materials/popular/6.png";
import Blaze from "../materials/productslisting/16.png";
import Mays from "../materials/productslisting/17.png";
import {
  BsDashCircleFill,
  IoIosAddCircleOutline,
  PiCurrencyNgn,
  GoHeart,
  GoHeartFill,
  HiStar,
} from "../icon";
import { useState } from "react";

// const Corporate = ({ onCartUpdate }) => {
//   const navigate = useNavigate();
// const [cart, setCart] = useState({});
// const [favorites, setFavorites] = useState({});

const Corporate = ({ productCounts, onCartUpdate }) => {
  // const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});

  const handleFavoriteToggle = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleIncrease = (id) => {
    const currentCount = productCounts[id] || 0;
    onCartUpdate(id, currentCount + 1);
  };

  const handleDecrease = (id) => {
    const currentCount = productCounts[id] || 0;
    onCartUpdate(id, currentCount > 0 ? currentCount - 1 : 0);
  };

  const products = [
    {
      id: 1,
      name: "Zee Dress",
      img: Zee,
      price: 302000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
    {
      id: 2,
      name: "Zara Dress",
      img: Zara,
      price: 202000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
    {
      id: 3,
      name: "Beam Dress",
      img: Beam,
      price: 205000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
    {
      id: 4,
      name: "Zamaiah Dress",
      img: Zamaiah,
      price: 100000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
    {
      id: 5,
      name: "Zoe Dress",
      img: Zoe,
      price: 150000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
    {
      id: 6,
      name: "Tubo Dress",
      img: Tubo,
      price: 220000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
    {
      id: 7,
      name: "Blaze Dress",
      img: Blaze,
      price: 120000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
    {
      id: 8,
      name: "Mays Dress",
      img: Mays,
      price: 100000,
      rating: 4.8,
      reviews: 222,
      desc: "Elegant summer dress made with plain silk",
    },
  ];

  // const handleProductClick = (product) => {
  //   navigate("/product-details", { state: { product } });
  // };

  return (
    <div className="mb-10 mt-4">
      <h1 className="text-xl font-semibold mb-4">Corporate</h1>
      <div className="flex flex-wrap gap-5 mobile:w-full relative">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%]"
            // onClick={() => handleProductClick(product)}
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-[65%] mobile:h-[60%] w-full"
            />
            <div className="flex justify-between items-center pt-2.5 mobile:pt-2 mobile:w-full">
              <p className="font-bold capitalize">{product.name}</p>
              {favorites[product.id] ? (
                <GoHeartFill
                  size={14}
                  className="text-error mr-4 mobile:mr-1 cursor-pointer"
                  onClick={() => handleFavoriteToggle(product.id)}
                />
              ) : (
                <GoHeart
                  size={14}
                  className="text-error mr-4 mobile:mr-1 cursor-pointer"
                  onClick={() => handleFavoriteToggle(product.id)}
                />
              )}
              {/* {favorites[product.id] ? (
                <GoHeartFill
                  size={16}
                  className="text-error pr- mr-4 mobile:mr-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteToggle(product.id);
                  }}
                />
              ) : (
                <GoHeart
                  size={16}
                  className="text-error pr- mr-4 mobile:mr-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteToggle(product.id);
                  }}
                />
              )} */}
            </div>
            <p className="text-sm mobile:text-[8.2px] text-[#98A2B3] w-[90%] pb-1.5 mobile:pb-0">
              {product.desc}
            </p>
            <div className="flex items-center w-[70.2%] pb-2">
              <HiStar size={15} className="text-warning" />
              <HiStar size={15} className="text-warning" />
              <HiStar size={15} className="text-warning" />
              <HiStar size={15} className="text-warning" />
              <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
              <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]">
                {product.rating} ({product.reviews})
              </p>
            </div>

            <span className="flex items-center gap-[9.5rem] ">
              <span className="flex items-center font-bold text-lg mobile:text-sm">
                <PiCurrencyNgn size={18} className=" mobile:pl-0.5" />
                {product.price.toLocaleString()}
              </span>
              <span className="flex items-center">
                <BsDashCircleFill
                  size={17}
                  className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                  onClick={() => handleDecrease(product.id)}
                />
                <p className="">{productCounts[product.id] || 0}</p>
                <IoIosAddCircleOutline
                  size={21}
                  className="ml-2 cursor-pointer mobile:pr-1"
                  onClick={() => handleIncrease(product.id)}
                />
              </span>
            </span>

            {/* <div className="flex items-center justify-between">
              <span className="flex items-center">
                <PiCurrencyNgn size={18} className="text-bold mobile:pl-0.5" />
                <p className="font-extrabold text-lg mobile:text-sm">
                  {product.price.toLocaleString()}
                </p>
              </span>
              {/* <span className="flex items-center pr-2">
                <BsDashCircleFill
                  size={17}
                  className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFromCart(product.id);
                  }}
                />{" "}
                {cart[product.id] || 0}{" "}
                <IoIosAddCircleOutline
                  size={21}
                  className="ml-2 cursor-pointer mobile:pr-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product.id);
                  }}
                />
              </span> 
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

Corporate.propTypes = {
  onCartUpdate: PropTypes.func.isRequired,
  // count: PropTypes.number.isRequired,
  // setCount: PropTypes.func.isRequired,
  productCounts: PropTypes.object.isRequired,
};

export default Corporate;
