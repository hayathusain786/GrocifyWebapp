import React from "react";

const Heading = ({spanText,text}) => {
  return (
    <div className="w-fit mx-auto group">
      <h1 className="lg:text-4xl text-2xl font-semibold">
        <span className="text-primary">{spanText}</span> {text}
      </h1>
      <div className="lg:w-30 w-20 text-center bg-gradient-to-r from-primary to-secondary h-1 lg:mt-3 mt-1 ml-auto group-hover:w-full transition-all duration-700"></div>
    </div>
  );
};

export default Heading;
