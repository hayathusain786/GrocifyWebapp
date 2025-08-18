import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [showMenu,setShowMenu]=useState(false);
  const [isScroll,setIsScroll]=useState(false);

  useEffect(()=>{
    const hundleScroll=()=>{
      setIsScroll(window.scrollY>10);
    }
    window.addEventListener('scroll',hundleScroll);
  },[isScroll]);

  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  }
  return (
    <header>
      <nav className={`flex justify-between h-20 items-center lg:px-16 px-8 fixed top-0 left-0 right-0 z-50  ${isScroll? 'bg-white/30 backdrop-blur-xl shadow-lg':'bg-white'}`}>
        {/* Logo */}
        <a href="#" className="text-3xl font-semibold">
          Gr<span className="text-primary">O</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className="lg:flex gap-x-8 font-medium text-[14px] tracking-wider hidden">
          <li>
            <NavLink to="/" className={({isActive})=>`${isActive?'text-secondary':''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              About us
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              Process
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
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
          <a href="#" className="text-text-grey text-2xl hover:text-secondary">
            <GoHeartFill />
          </a>
          <a href="#" className="text-text-grey text-2xl hover:text-secondary">
            <HiShoppingBag />
          </a>
          <button className="text-text-grey text-2xl hover:text-secondary lg:hidden transition-all duration-500" onClick={toggleMenu}>
           
            {showMenu ? <TbMenu3/>: <TbMenu2/>}
          </button>
        </div>


        </div>
        {/* Mobile Menu */}
        <ul className={`lg:hidden flex flex-col items-center space-y-6 absolute top-30 transform -translate-x-1/2 bg-secondary/100 backdrop-blur-2xl rounded-md font-semibold tracking-wider px-10 py-12 transition-all duration-500 ${showMenu ? 'left-1/2' : '-left-full'} `}>
          <li>
            <a href="#" className="text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              About us
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              Process
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
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
