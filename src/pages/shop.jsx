import ProductListing from "../components/productslisting";
import PropTypes from "prop-types";

const Shop = ({ onAddProducts, corporateProducts, dresses, cart }) => {
  return (
    <>
      <ProductListing
        onAddProducts={onAddProducts}
        corporateProducts={corporateProducts}
        dresses ={dresses}
        cart={cart}
      />
    </>
  );
};
Shop.propTypes = {
  onAddProducts: PropTypes.func.isRequired,
  cart: PropTypes.array,
  corporateProducts: PropTypes.array,
  dresses: PropTypes.array,
};

export default Shop;
