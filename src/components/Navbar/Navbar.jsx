import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { logout } from "../../services/authService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    const result = await logout();
    if (result.status == 200) {
      Cookies.remove("role");
      Cookies.remove("userId");
      navigate("/");
    }
  };
  useEffect(() => {
    const hundleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", hundleScroll);
  }, [isScroll]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <nav
        className={`flex justify-between h-20 items-center lg:px-16 px-8 fixed top-0 left-0 right-0 z-50  ${
          isScroll ? "bg-white/30 backdrop-blur-xl shadow-lg" : "bg-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold">
          Gr<span className="text-primary">O</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="lg:flex gap-x-8 font-medium text-[14px] tracking-wider hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-secondary" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-secondary" : ""}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                `${isActive ? "text-secondary" : ""}`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Contact us
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          {/* Search box */}
          <div className="lg:flex items-center border-2 border-primary rounded-3xl px-4 py-1 hidden">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search..."
              autoComplete="off"
              className="outline-none"
            />
            <button className="bg-gradient-to-b from-primary to-secondary w-8 h-8 rounded-full flex justify-center items-center text-white cursor-pointer">
              <FaSearch />
            </button>
          </div>

          {/* Action Links */}
          <div className="flex items-center space-x-5">
            <Link
              to="/cart"
              className="text-text-grey btn-primary rounded-full gap-2"
            >
              <TiShoppingCart className="text-2xl" />
            </Link>
            {!Cookies.get("role") && (
              <div>
                <Link to="/login" className="btn-accent">
                  Login
                </Link>
              </div>
            )}
            {Cookies.get("role") && (
              <div>
                <div
                  className="flex justify-center items-center cursor-pointer text-text-grey text-2xl hover:text-secondary"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="">
                    <FaRegUserCircle />
                  </span>
                  <span className="text-[14px]">
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>

                <div
                  className={`bg-gray-300 rounded w-3xs p-3 fixed z-50 mt-5 right-5 ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex justify-center items-center flex-col gap-3">
                    <li className="border-b-1">
                      <Link to="/my-orders">My Orders</Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="btn-accent text-sm"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <button
              className="text-text-grey text-2xl hover:text-secondary lg:hidden transition-all duration-500"
              onClick={toggleMenu}
            >
              {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`lg:hidden flex flex-col items-center space-y-6 absolute top-30 transform -translate-x-1/2 bg-gray-200 backdrop-blur-2xl rounded-md font-semibold tracking-wider px-10 py-12 transition-all duration-500 ${
            showMenu ? "left-1/2" : "-left-full"
          } `}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-secondary" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-secondary" : ""}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                `${isActive ? "text-secondary" : ""}`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Contact us
            </a>
          </li>
          {/* Search box */}
          <li className="flex items-center border-2 border-primary rounded-3xl px-4 py-1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search..."
              autoComplete="off"
              className="outline-none"
            />
            <button className="bg-gradient-to-b from-primary to-secondary w-8 h-8 rounded-full flex justify-center items-center text-white cursor-pointer">
              <FaSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
