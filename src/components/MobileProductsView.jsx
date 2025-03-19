import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  BsDashCircleFill,
  IoIosAddCircleOutline,
  GoHeart,
  GoHeartFill,
  HiStar,
} from "../icon";

import Button from "./Button";
import { corporateProducts, dresses } from "../components/data";
import { useCart } from "../contexts/CartProvider";

const ITEMS_PER_PAGE = 8; // You can adjust this number as needed.

export default function MobileProductsView() {
  const [favorites, setFavorites] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { dispatch } = useCart();

  const allProducts = [...corporateProducts, ...dresses];

  const [quantities, setQuantities] = useState(
    allProducts.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
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

  function formatCurrency(value) {
    const formattedCurrency = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumSignificantDigits: "2",
    }).format(value);
    return formattedCurrency;
  }

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  // Get current page products
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mb-10 mt-4 w-full md:hidden block overflow-hidden">
      <h1 className="text-xl font-semibold mb-4">Our Products</h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 gap-5 w-full overflow-hidden"
        >
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-full overflow-hidden"
            >
              <img
                src={product.image}
                alt={`${product.title} Dress`}
                loading="lazy"
                className=":h-[60%] w-full "
              />

              <div className="flex justify-between items-center pt-2 w-full">
                <p className="font-semibold text-[0.9rem] capitalize">{`${product.title} Dress`}</p>

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

              <p className="text-xs text-[#98A2B3] w-[88%] pb-1.5 ">
                {product.desc}
              </p>

              <div className="flex items-center w-[70.2%] pb-2">
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={15} className="text-warning" />
                <HiStar size={16} className="text-[#E4E7EC] mr-1.5" />
                <p className="text-[#667085] text-xs">
                  {product.rating} ({product.reviews})
                </p>
              </div>

              <span className="flex items-center justify-between">
                <span className="flex items-center font-bold text-sm">
                  {formatCurrency(product.price)}
                </span>
                <span className="flex items-center">
                  <BsDashCircleFill
                    size={17}
                    className="text-[#D0D5DD] mr-2 pr-1 cursor-pointer"
                    onClick={() => handleDecrease(product.id)}
                  />

                  <p className="text-sm">{quantities[product.id]}</p>

                  <IoIosAddCircleOutline
                    size={21}
                    className="ml-2 cursor-pointer pr-1"
                    onClick={() => handleIncrease(product.id)}
                  />
                </span>
              </span>

              <span className="w-full flex items-end justify-end text-white mt-2">
                <Button
                  style={{
                    padding: "0.2rem 0.5rem",
                    backgroundColor: "#0b69ff",
                  }}
                  onClick={() =>
                    dispatch({
                      type: "addToCart",
                      payload: {
                        ...product,
                        quantity: quantities[product.id] || 1,
                      },
                    })
                  }
                >
                  Add to cart
                </Button>
              </span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`px-[1.25rem] py-[0.6875rem] rounded-[0.625rem] h-[2.5rem] w-[2.5rem] flex items-center justify-center ${
            currentPage === 1
              ? " bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#0B69FF] text-white"
          }`}
        >
          &lt;
        </button>
        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={`px-[1.25rem] py-[0.6875rem] border border-[#CACACA] rounded-[0.625rem] h-[2.5rem] w-[2.5rem] flex items-center cursor-pointer font-semibold justify-center text-[#5A99FF] ${
                currentPage === pageNum ? "bg-[#D1E3FF] " : "bg-[text-[#5A99FF]"
              }`}
            >
              {pageNum}
            </button>
          )
        )}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-[1.25rem] py-[0.6875rem] rounded-[0.625rem] h-[2.5rem] w-[2.5rem] flex items-center justify-center  ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#0B69FF] text-white"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
