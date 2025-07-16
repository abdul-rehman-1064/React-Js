import React, { useEffect , useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { FaOpencart } from "react-icons/fa";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import axios from "axios";
import DarkMode from "../DarkMode";
import SideMenu from "../SideMenu";
import { useCart } from "../../context/CartContext";

function Header() {
  const [address, setAddress] = React.useState("Detcting Location...");
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const response = await axios.get(url);
        if (response.data && response.data.display_name) {
          setAddress(response.data.address);
        } else {
          setAddress("Location not found");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <nav className="bg-white dark:bg-black dark:text-white flex justify-between items-center p-4 text-black ">
        <div className="mx-8 text-2xl sm:mx-0">
          <Link to="/" className="flex items-center font-bold">
            <span className="text-[#FFCB74]">Nexora</span>Solutions
          </Link>
        </div>
        <div className="lg:flex text-black dark:text-white hidden ">
          <div className="flex items-center mx-4 gap-2 cursor-pointer ">
            <FiMapPin className="text-[#e6b054]" />
            {address ? (
              <p>
                {address.district},{address.state},{address.country}
              </p>
            ) : (
              " Detecting Location..."
            )}
          </div>
        </div>
        <div>
          <ul className="flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 hidden lg:flex text-black dark:text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#e6b054]" : "text-black dark:text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFCB74] lg:p-0 `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#e6b054]" : "text-black dark:text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#e7c07ddb] lg:p-0`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#e6b054]" : "text-black dark:text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#e7c07ddb] lg:p-0 `
                }
              >
                Products
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-[#e6b054]" : "text-black dark:text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#e7c07ddb] lg:p-0 `
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#ebcb94]" : "text-black dark:text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-2xl lg:border-0 hover:text-[#e7c07ddb] lg:p-0 `
                }
              >
                <div className="flex items-center text-black dark:text-white">
                  <div className="">
                    <FaOpencart />
                  </div>
                  <div className="cart text-sm bg-[#e7ae4b] p-1 rounded-full  ">
                    {cart.length}
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:flex items-center hidden">
          <SignedOut>
            <SignInButton className="flex items-center mx-4 bg-[#FFCB74] rounded-xl w-28 cursor-pointer justify-center p-2 font-semibold" />
          </SignedOut>
          <SignedIn className="">
            <UserButton />
          </SignedIn>
        </div>
        <DarkMode />
        <div>
          {isOpen ? (
            <HiMenuAlt1
              className="lg:hidden text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HiMenuAlt3
              className="lg:hidden text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Header;
