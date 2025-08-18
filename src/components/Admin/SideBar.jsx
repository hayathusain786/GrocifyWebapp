import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const SideBar = ({ sideBarToggle = true }) => {
  const [activeToggle, setActiveToggle] = useState(null);
  const [isSideBarToggle, setIsSideBarToggle] = useState(true);

  //   setIsSideBarToggle(sideBarToggle);
  useEffect(() => {
    setIsSideBarToggle(sideBarToggle);
  }, [sideBarToggle]);

  const toggleDropdown = (name) => {
    setActiveToggle((prev) => (prev === name ? null : name));
  };

  return (
    <section>
      <div
        className={`${
          isSideBarToggle ? "w-2xs max-w-2xs" : "w-0 overflow-hidden"
        } bg-a-dark text-a-light min-h-screen transition-all duration-500 fixed left-0 top-0 bottom-0`}
      >
        <div>
          <h1 className="text-2xl flex justify-center items-center h-16">
            <Link to="/admin">Grocefy</Link>
          </h1>
        </div>
        <ul className="px-3 py-4">
          <li>
            <p
              onClick={() => toggleDropdown("master")}
              className="flex justify-between items-center cursor-pointer border-b-2 px-2 py-3"
            >
              Master Pages
              <span>
                {activeToggle === "master" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </p>
            <ul
              className={`${
                activeToggle === "master" ? "h-fit py-2" : "h-0 overflow-hidden"
              } px-2 text-[14px] transition-all duration-300`}
            >
              <li className="subLink">
                <Link to="category">Category</Link>
                {/* <a href="#">Category</a> */}
              </li>
              <li className="subLink">
                <Link to='unit'>Unit</Link>
              </li>
            </ul>
          </li>
          <li>
            <p
              onClick={() => toggleDropdown("product")}
              className="flex justify-between items-center cursor-pointer border-b-2 px-2 py-3"
            >
              Product
              <span>
                {activeToggle === "product" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </p>
            <ul
              className={`${
                activeToggle === "product" ? "h-fit py-2" : "h-0 overflow-hidden"
              } px-2 text-[14px] transition-all duration-300`}
            >
              <li className="subLink">
                <Link to="add-product">Add Product</Link>
                {/* <a href="#">Category</a> */}
              </li>
              <li className="subLink">
                <Link to='product-list'>Product List</Link>
              </li>
            </ul>
          </li>
          <li>
            <p
              onClick={() => toggleDropdown("setting")}
              className="flex justify-between items-center cursor-pointer border-b-2 px-2 py-3"
            >
              Settings{" "}
              <span>
                {" "}
                {activeToggle === "setting" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}{" "}
              </span>
            </p>
            <ul
              className={`${
                activeToggle === "setting"
                  ? "h-fit py-2"
                  : "h-0 overflow-hidden"
              } px-2 text-[14px] transition-all duration-300`}
            >
              <li className="subLink">
                <a href="#">Website Setting</a>
              </li>
              <li className="subLink">
                <a href="#">Banner Setting</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
