import React, { useState } from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaBarsStaggered } from "react-icons/fa6";
import SideBar from "./SideBar";
import Cookies from "js-cookie";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogout = async () => {
    const result = await logout();
    if (result.status == 200) {
      Cookies.remove("role");
      Cookies.remove("userId");
      navigate("/admin/login");
    }
  };
  return (
    <>
      <nav className="bg-a-dark h-16 flex justify-between items-center px-4 text-3xl text-a-light">
        {/* logo  */}
        <div className="flex justify-between items-center w-2xs">
          <span onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
            {isSideBarOpen ? <FaBarsStaggered /> : <FaBars />}
          </span>
        </div>
        {/* actions  */}
        <div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>
              <FaRegUserCircle />
            </span>
            <span className="text-[14px]">
              {isDropdownOpen ?<IoIosArrowUp /> :<IoIosArrowDown />}
              
            </span>
          </div>

          <div
            className={`bg-gray-300 rounded w-3xs p-3 fixed z-50 mt-5 right-5 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex justify-center items-center">
              <li>
                <button onClick={handleLogout} className="btn-accent text-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <aside>
        <SideBar sideBarToggle={isSideBarOpen} />
      </aside>
    </>
  );
};

export default Navbar;
