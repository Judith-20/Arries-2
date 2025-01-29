import {
  BsDashCircleFill,
  IoIosAddCircleOutline,
  // PiCurrencyNgn,
  GoHeart,
  GoHeartFill,
  HiStar,
} from "../icon";
import PropTypes from "prop-types";
import Button from "./Button";
import { useState } from "react";
// import { BsDashCircleFill, IoIosAddCircleOutline, PiCurrencyNgn, GoHeart, GoHeartFill, HiStar, IoChevronForwardOutline, IoChevronBackOutline  } from "../icon";


const Dress = ({ dresses, onAddProducts }) => {
  const [favorites, setFavorites] = useState({});

  const [quantities, setQuantities] = useState(
    dresses.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );

  const handleIncrease = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const handleDecrease = (id) => {
    setQuantities({
      ...quantities,
      [id]: Math.max(quantities[id] - 1, 0),
    });
  };

  const handleFavoriteToggle = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  // formatting currency
  function formatCurrency(value) {
    const formattedCurrency = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumSignificantDigits: "2",
    }).format(value);
    return formattedCurrency;
  }

  return (
    <>
      <div className="">
        <div className="mb-10 ">
          <h1 className="text-xl font-semibold mb-4 ">Dress</h1>
          <div className="flex flex-wrap gap-5 mobile: w-full relative">
            {dresses?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%] "
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-[65%] mobile:h-[60%] w-full "
                />
                <div className="flex justify-between items-center pt-2.5 mobile:pt-2 mobile:w-full ">
                  <p className="font-bold capitalize ">{product.title}</p>
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
                </div>
                <p className="text-sm mobile:text-[8.2px] text-[#98A2B3]  w-[90%] pb-1.5 mobile:pb-0 ">
                  {product.desc}
                </p>

                {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

                <div className="flex items-center w-[70.2%] pb-2  ">
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                  <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]  ">
                    {product.review}
                  </p>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="flex items-center">
                    <p className="font-extrabold text-lg mobile:text-sm ">
                      {formatCurrency(product.price)}
                    </p>
                  </span>
                  <span className="flex items-center pr-2 ">
                    <BsDashCircleFill
                      size={17}
                      className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
                      onClick={() => handleDecrease(product.id)}
                    />
                    {quantities[product.id]}
                    <IoIosAddCircleOutline
                      size={21}
                      className="ml-2 cursor-pointer mobile:pr-1"
                      onClick={() => handleIncrease(product.id)}
                    />
                  </span>

                </div>
                  <span className="w-full flex items-end justify-end text-whyte ">
                    <Button
                      style={{
                        padding: "0.2rem 0.5rem",
                        backgroundColor: "#0b69ff",
                      }}
                      onClick={() =>
                        onAddProducts({
                          ...product,
                          quantity: quantities[product.id] || 1,
                        })
                      }
                    >
                      Add to cart
                    </Button>
                  </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Dress.propTypes = {
  onAddProducts: PropTypes.func.isRequired,
  dresses: PropTypes.array,
};

export default Dress;
