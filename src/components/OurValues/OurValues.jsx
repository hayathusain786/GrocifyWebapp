import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import ValueCard from "../ValueCard/ValueCard";
import { GiFruitBowl } from "react-icons/gi";

const OurValues = () => {
  const ourValuesList = [
    {
      id: 1,
      icon: <FaHeart />,
      title: "Trust",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
    },
    {
      id: 2,
      icon: <FaLeaf/>,
      title: "Always Fresh",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
    },
    {
      id: 3,
      icon: <FaShield />,
      title: "Food Safety",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      icon: <GiFruitBowl/>,
      title: "100% Organic",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const firstTwoValues=ourValuesList.slice(0,2);
  const secondTwoValues=ourValuesList.slice(2);

  return (
    <section>
      <div className="py-10">
        <Heading spanText="Our" text="Values" />
        {/* Card section  */}
        <div className="flex md:flex-row flex-col gap-3 mt-3 items-center justify-between">
          {/* left items */}
          <div className="md:min-h-80 flex flex-col justify-between md:space-y-16 space-y-6 w-full">
            {firstTwoValues.map( (item)=>(
                <ValueCard key={item.id} {...item} flexdirection='md:flex-row-reverse' />
            ) )}
          </div>

          {/* image section */}
          <div>
            <img
              src="../src/assets/images/basket-full-vegetables.png"
              alt="Values"
              className="hidden md:block"
            />
          </div>
          {/* right items */}
          <div className="md:min-h-80 flex flex-col justify-between md:space-y-16 space-y-6 w-full">
            {secondTwoValues.map( (item)=>(
                <ValueCard key={item.id} {...item} flexdirection='flex-row'/>
            ) )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
