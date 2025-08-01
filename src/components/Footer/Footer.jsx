import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-card mt-6 w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-16">
        {/* info */}
        <div>
          {/* logo */}
          <div>
            <a href="#" className="text-xl font-semibold">
              Gr<span className="text-primary">O</span>cify
            </a>
          </div>
          {/* content  */}
          <div className="flex flex-col gap-6 mt-3">
            <p className="w-[80%] text-text-grey text-[14px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
              aliquid!
            </p>
            <p>2025 © All Right Reserved</p>
          </div>
        </div>
        {/* company */}
        <div>
          <div>
            <h1 className="text-xl font-semibold pb-2">Company</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-3 text-text-grey text-[14px]">
              <li className="hover:text-secondary">
                <a href="#">About</a>
              </li>
              <li className="hover:text-secondary">
                <a href="#">FAQ's</a>
              </li>
            </ul>
          </div>
        </div>
        {/* support */}
        <div>
          <div>
            <h1 className="text-xl font-semibold pb-2">Support</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-3 text-text-grey text-[14px]">
              <li className="hover:text-secondary">
                <a href="#">Support Center</a>
              </li>
              <li className="hover:text-secondary">
                <a href="#">Feedback</a>
              </li>
              <li className="hover:text-secondary">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        {/* email */}
        <div>
          <div>
            <h1 className="text-xl font-semibold pb-2">Stay Connected</h1>
            <p className="flex flex-col gap-3 text-text-grey text-[14px]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mt-5 border-1 border-secondary flex bg-white rounded-md pl-3">
            <input
              type="text"
              placeholder="Email address.."
              className="outline-none w-full"
              autoComplete="off"
            />
            <button className="w-[40px] h-full bg-secondary p-2">
              <IoArrowRedoSharp className=" text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
