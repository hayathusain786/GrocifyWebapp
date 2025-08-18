import React, { useState } from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

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
          <span>
            {" "}
            <FaRegUserCircle />{" "}
          </span>
        </div>
      </nav>
      <aside>
        <SideBar sideBarToggle={isSideBarOpen} />
      </aside>
    </>
  );
};

export default Navbar;
