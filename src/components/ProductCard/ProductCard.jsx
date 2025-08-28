import React, { useState } from "react";
import { FaHeart, FaPlusSquare } from "react-icons/fa";
import { addCart } from "../../services/cartService";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, imageUrl, name, price, offerPrice, unitName,discountPercentage }) => {

  const navigate=useNavigate();

  const handleAddToCart = async (productId) => {
    try {
      if (Cookies.get("role")) {
        const result = await addCart(productId);
        if (result.status == 200) {
          toast.success("Add to cart successfully.");
        }
      }
      else{
          navigate('/login');
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="bg-card px-3 pt-5 pb-7 flex flex-col justify-between items-center rounded-lg">
      {/* icons  */}
      {/* <div className="flex justify-between w-full">
        <span className="text-secondary text-xl">
          {" "}
          <FaHeart />{" "}
        </span>
        <span className="text-secondary text-xl">
          {" "}
          <FaPlusSquare />{" "}
        </span>
      </div> */}
      {/* image  */}
      <div className="w-full h-36">
        <img src={imageUrl} className="w-full h-full object-contain" />
      </div>
      {/* Content  */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className=" tracking-wider">{name}</h2>
        <p className="font-medium flex gap-1 items-center">
          <span className="font-semibold">₹{offerPrice}</span>
          <span className="text-[14px]">
            <s>₹{price}</s>
          </span>
          <span className="text-primary text-[18px]">{discountPercentage ==0 ? '' : `${discountPercentage}% OFF`}</span>
        </p>
        <div className="flex items-center gap-2">
          <p className="border-1 border-gray-400 rounded py-1 px-3 text-[14px] whitespace-nowrap">
            {unitName}
          </p>
          <button
            className="btn-accent whitespace-nowrap"
            onClick={() => handleAddToCart(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
