import React from "react";
import { FaHeart, FaPlusSquare } from "react-icons/fa";

const ProductCard = ({ imageUrl, name, price, offerPrice, unitName }) => {
  return (
    <div className="bg-card px-3 py-5 flex flex-col justify-between items-center rounded-lg">
      {/* icons  */}
      <div className="flex justify-between w-full">
        <span className="text-secondary text-xl">
          {" "}
          <FaHeart />{" "}
        </span>
        <span className="text-secondary text-xl">
          {" "}
          <FaPlusSquare />{" "}
        </span>
      </div>
      {/* image  */}
      <div className="w-full h-36">
        <img src={imageUrl} className="w-full h-full object-contain" />
      </div>
      {/* Content  */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className=" tracking-wider">{name}</h2>
        <p className="font-medium flex gap-1 items-center">
          <span className="font-semibold">₹{offerPrice.toFixed(2)}</span>
          <span className="text-[14px]">
            <s>₹{price.toFixed(2)}</s>
          </span>
        </p>
        <div className="flex items-center gap-2">
          <p className="border-1 border-gray-400 rounded py-1 px-3 text-[14px] whitespace-nowrap">{unitName}</p>
          <button className="btn-accent whitespace-nowrap">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
