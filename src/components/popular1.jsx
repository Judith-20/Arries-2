import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {
  BsDashCircleFill,
  IoIosAddCircleOutline,
  // PiCurrencyNgn,
  GoHeartFill,
  HiStar,
  GoHeart,
} from "../icon";


function PopularProducts1({
  products,
  onAddProducts,
}) {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );
  return (
    <>
      <div className="grid grid-cols-4 gap-5 gap-y-12 bg-whyte ">
        {products?.map((product) => (
          <Product
            product={product}
            key={product.id}
            onAddProducts={onAddProducts}
            quantities={quantities}
            setQuantities= {setQuantities}
          />
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

// setAddedProducts
function Product({ product, onAddProducts, quantities, setQuantities }) {
  // const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleIncrease = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const handleDecrease = (id) => {
    setQuantities({
      ...quantities,
      [id]: Math.max(quantities[id] - 1, 0),
    });
  };

  function formatCurrency(value) {
    const formattedCurrency = new Intl.NumberFormat("en-NG", {
      style:"currency", 
      currency: "NGN",
      minimumSignificantDigits:"2"
    }).format(value)
    return formattedCurrency
  }

  return (
    <div className="rounded-[.85rem] flex flex-col gap-y-1 items-start hover:-translate-y-1 hover:scale-100 duration-500  ">
      {/**shadow-md hover:scale-105 */}
      <img src={product.image} alt={product.title} loading="lazy" />
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
        </p>
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
          {/* <PiCurrencyNgn size={18} className=" mobile:pl-0.5" /> */}
          {formatCurrency(product.price)}
        </span>
        <span className="flex items-center">
          <BsDashCircleFill
            size={17}
            className="text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer"
            onClick={() => handleDecrease(product.id)}
          />
          {/* <p className="">{count}</p> */}
          {/* <p className="">{product.quantity || 0}</p> */}
          <p className="">{quantities[product.id]}</p>
          <IoIosAddCircleOutline
            size={21}
            className="ml-2 cursor-pointer mobile:pr-1"
            onClick={() => handleIncrease(product.id)}
          />
        </span>
      </span>

      <span className="w-full flex items-end justify-end text-whyte ">
        {/* <Button style={{ padding: "0.2rem 0.5rem", backgroundColor: "#0b69ff" }} onClick={() => onAddProducts(product)}>Add to cart</Button> */}
        <Button style={{ padding: "0.2rem 0.5rem", backgroundColor: "#0b69ff" }} onClick={() => onAddProducts({...product, quantity:quantities[product.id] || 1})}>Add to cart</Button>
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
    price: PropTypes.number,
    id: PropTypes.number,
    quantity: PropTypes.number,
    reduce: PropTypes.func,
  }).isRequired,
  onAddProducts: PropTypes.func,
  quantities: PropTypes.object,
  setQuantities: PropTypes.func,
};

PopularProducts1.propTypes = {
  products: PropTypes.array,
  onAddProducts: PropTypes.func,
};

export default PopularProducts1;
