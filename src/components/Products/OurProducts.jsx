import React, { useState,useEffect } from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaPlusSquare } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";
import {ProductList,Categories} from "./ProductList";
import { Link } from "react-router-dom";
import { GetProductList } from "../../services/productService";

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [products,setProducts]=useState([]);
  
    useEffect( ()=>{
       const fetchProducts =async ()=>{
        const data=await GetProductList();
        setProducts(data);
       }
       fetchProducts();
    },[] );
  let filteredProducts=activeTab === 'All' ?products : products.filter( product=>product.categoryName===activeTab);
  
  return (
    <section>
      <div className="mb-6">
        <Heading spanText="Our" text="Products" />
        {/* Category section  */}
        <div className="flex justify-center items-center mt-8 w-full">
          {/* Category Tabs  */}
          <ul className="grid md:grid-cols-6 grid-cols-3 gap-6 w-fit text-center">
            {Categories.map((category, index) => (
              <li
                className={`px-3 py-1 rounded transition-all duration-300 ${
                  activeTab == category
                    ? "bg-gradient-to-b from-primary to-secondary text-white"
                    : "bg-card"
                }`}
                key={index}
              >
                <button className="w-full" onClick={() => setActiveTab(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* product card section  */}

        <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-10 md:gap-6 gap-4 mt-10">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {/* View all button  */}
        <div className="my-10 w-full text-center">
            <Link to='/Products' className="btn-primary">View All</Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
