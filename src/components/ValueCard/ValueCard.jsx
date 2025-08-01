import React from "react";

const ValueCard = ({ icon, title, description, flexdirection }) => {
  return (
    <div
      className={`flex items-center ${flexdirection} gap-3 px-3 py-1 rounded-md md:bg-white bg-card`}
    >
      <div className="bg-gradient-to-b from-primary to-secondary rounded-full p-2">
        <span className=" text-white rounded-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-bold md:text-2xl text-lg text-nowrap">{title}</h3>
        <p className="text-text-grey text-[12px]">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
