import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import CartIcon from "./CartIcon";

export default function MobileNav({style}) {
  // State to handle the navbar's open/close status
  const [openNav, setOpenNav] = useState(true);

  // Function to toggle the navbar's visibility
  const ToggleNavBar = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="md:hidden">
      <div className="">
        {/* Toggle between open and close icons based on openNav state */}
        {!openNav ? (
          <IoClose size={28} className="mr-10" onClick={ToggleNavBar}/>
        ) : (
          <div className="flex justify-between gap-6">
            <CartIcon style={style} />
            <IoMenu size={30} className="text-rblue mr-10" onClick={ToggleNavBar}/>
          </div>
        )}
      </div>
      <div
        className={
          !openNav
            ? "left-10 fixed top-40 w-[40%] flex flex-col justify-center items-center bg-whyte py-5 text-center px-1 border-2 rounded-md ease-in-out duration-500 md:hidden z-10 "
            : "fixed left-full ease-in-out duration-500 z-10"
        }
      >
        <ul className="nav w-full mb-2 text-sm block pt-8 font-bold ">
          <li className="transition-colors duration-300 hover:bg-rblue py-2 hover:text-white">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? " nav-link-active" : " nav-link"
              }
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li className="transition-colors duration-300 hover:bg-rblue py-2 hover:text-white">
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive ? " nav-link-active" : " nav-link"
              }
            >
              {" "}
              Shop{" "}
            </NavLink>
          </li>
          <li className="transition-colors duration-300 hover:bg-rblue py-2 hover:text-white">
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? " nav-link-active" : " nav-link"
              }
            >
              {" "}
              Products{" "}
            </NavLink>
          </li>
          <li className="transition-colors duration-300 hover:bg-rblue py-2 hover:text-white">
            <NavLink
              to={"/home"}
              className={({ isActive }) =>
                isActive ? " nav-link-active" : " nav-link"
              }
            >
              {" "}
              Contact Us{" "}
            </NavLink>
          </li>
        </ul>

        <div className="mt-2">
          <Button
            style={{
              padding: "0.5rem 2.25rem",
              color: "#0b69ff",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            <NavLink to={"/login"}> Log in </NavLink>
          </Button>

          <Button
            style={{
              color: "#fafafa",
              backgroundColor: "#0b69ff",
              padding: "0.625rem 1rem",
            }}
          >
            <NavLink to={"/get-started"}> Get started </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
