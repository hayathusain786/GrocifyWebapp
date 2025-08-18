import React, { useEffect, useState } from "react";
import GroceryHero from "../../assets/images/grocery.png";
const Hero = () => {

  return (
    <section>
      <div className="flex md:flex-row flex-col items-center md:pt-20 pt-24 min-h-full">
        {/* Content section */}
        <div className="flex-1">
          <span className="bg-secondary px-5 py-2 rounded-3xl text-white">
            Export Best Quality..
          </span>
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold py-6">
            Tasty Organic <span className="text-primary">Fruits</span> &{" "}
            <span className="text-primary">Veggies</span> In Your City
          </h1>
          <p className="text-text-grey lg:text-2xl md:text-xl text-[14px] pb-5">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <button className="btn-primary">Shop Now</button>
        </div>
        {/* Image section  */}
        <div className="flex-1">
          <img src={GroceryHero} alt="Hero Image" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
