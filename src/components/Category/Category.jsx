import React from "react";
import Heading from "../Heading/Heading";

const Category = () => {
  const categoryList = [
    {
      id: 1,
      banner: "../src/assets/images/fruits-and-veggies.png",
      tittle: "Fruits & Veggies",
      description:
        "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    },
    {
      id: 2,
      banner: "../src/assets/images/dairy-and-eggs.png",
      tittle: "Dairy & Eggs",
      description:
        "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    },
    {
      id: 3,
      banner: "../src/assets/images/meat-and-seafood.png",
      tittle: "Meat & SeaFood",
      description:
        "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    },
  ];
  return (
    <section>
      <div className="py-12">
        <Heading spanText="Shop" text="By Category" />
        <div className="flex md:flex-row flex-col items-center lg:gap-16 md:gap-4 gap-2">
          {categoryList.map((card) => {
            return (
              <div className="flex-1 px-5 py-7 bg-card mt-5 rounded flex flex-col space-y-4 items-center" key={card.id}>
                <img src={card.banner} className="w-96"/>
                <h1 className="text-xl py-2 font-semibold">{card.tittle}</h1>
                <p className="py-2 font-light">
                    {card.description}
                </p>
                <button className="btn-primary">See All</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
