import Logo from "../materials/logo.png";
import { NavLink, Link } from "react-router-dom";
import CartIcon from "../components/CartIcon";
import PropTypes from "prop-types";

function NavBar({
  children,
  homeActive,
  shopActive,
  productActive,
  contactActive,
}) {
  return (
    <>
      <img
        src={Logo}
        alt=""
        className="w-[10%] h-[11%] mobile:w-[34%] mobile:h-[40%] "
      />

      <div className="flex items-center gap-3 mobile:hidden">
        <ul className=" mobile:hidden flex gap-5 text-[13px] font-Inter font-semibold ">
          <li className={`${homeActive}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link-active hover:bg-[#0b69ff] hover:p-4" : "transition-colors duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className={`${shopActive}`}>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "nav-link-active hover:bg-[#0b69ff] hover:p-4" : "transition-colors duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className={`${productActive}`}>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link-active hover:bg-[#0b69ff] hover:p-4" : "transition-colors duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
              }
            >
              Products
            </NavLink>
          </li>
          <li className={`${contactActive}`}>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? " nav-link-active hover:bg-[#0b69ff] hover:p-4" : "transition-colors duration-200 ease-in-out hover:bg-[#0b69ff] hover:p-4 nav-link"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>

      <div className="">{children}</div>
    </>
  );
}

NavBar.propTypes = {
  cart: PropTypes.array,
  children: PropTypes.node,
  homeActive: PropTypes.string,
  shopActive: PropTypes.string,
  productActive: PropTypes.string,
  contactActive: PropTypes.string,
};

export default NavBar;
