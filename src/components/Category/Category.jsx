import React, { useState,useEffect } from "react";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import { GetCategories } from "../../services/masterService";

const Category = () => {

  const [categories,setCategories]=useState([]);
  
  
  
  useEffect(() => {
      const fetchCategories = async () => {
        const data = await GetCategories();
        setCategories(data);
      };
      fetchCategories();
    },[]);

  const categoryList = [
    {
      id: 1,
      banner: "../src/assets/images/fruits-and-veggies.png",
      tittle: "Fruits & Veggies",
      description:
        "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        Category:["Fruits","Vegetables"],
    },
    {
      id: 2,
      banner: "../src/assets/images/dairy-and-eggs.png",
      tittle: "Dairy & Eggs",
      description:
        "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
      Category:["Dairy"],
    },
    {
      id: 3,
      banner: "../src/assets/images/meat-and-seafood.png",
      tittle: "Meat & SeaFood",
      description:
        "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        Category:["Meat","SeaFood"]
    },
  ];
  return (
    <section>
      <div className="py-12">
        <Heading spanText="Shop" text="By Category" />
        <div className="flex md:flex-row flex-col items-center lg:gap-16 md:gap-4 gap-2">
          {categories.slice(0,3).map((cat) => {
            return (
              <div className="flex-1 px-5 py-7 bg-card mt-5 rounded flex flex-col space-y-4 items-center" key={cat.id}>
                <img src={cat.imageUrl} className="w-96"/>
                <h1 className="text-xl py-2 font-semibold">{cat.name}</h1>
                <p className="py-2 font-light">
                    {cat.description}
                </p>
                <Link to='/products'
                state={{category:[cat.name]}}
                 className="btn-primary"
                 >See All</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
