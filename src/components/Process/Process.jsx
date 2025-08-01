import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
} from "react-icons/tb";
import { SiOverleaf } from "react-icons/si";
import { MdOutlineFactory } from "react-icons/md";
import { CiDeliveryTruck, CiMedal } from "react-icons/ci";

const Process = () => {
  const processList = [
    {
      id: 1,
      numberIcon: <TbCircleNumber1 />,
      icon: <SiOverleaf />,
      title: "Sourcing",
      description: "It is a long established fact that a reader.",
    },
    {
      id: 2,
      numberIcon: <TbCircleNumber2 />,
      icon: <MdOutlineFactory />,
      title: "Manufacturing",
      description: "It is a long established fact that a reader.",
    },
    {
      id: 3,
      numberIcon: <TbCircleNumber3 />,
      icon: <CiMedal />,
      title: "Quality Control",
      description: "It is a long established fact that a reader.",
    },
    {
      id: 4,
      numberIcon: <TbCircleNumber4 />,
      icon: <CiDeliveryTruck />,
      title: "Logistics",
      description: "It is a long established fact that a reader.",
    },
  ];

  return (
    <section>
      <div className="my-10">
        <div className="w-fit mr-auto">
          <Heading spanText="Our" text="Process" />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-6 lg:pt-52 pt-10">
          {processList.map((process) => (
            <div className={`flex flex-col gap-6 items-center ${process.id % 2===0 ? 'lg:-mt-48':''}`} key={process.id}>
              {/* number icon */}
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-text-grey">
                <span className="text-6xl self-center w-fit m-auto">
                  {process.numberIcon}
                </span>
              </div>
              {/* Content  */}
              <div className="flex gap-3 items-center">
                <div className="bg-secondary w-16 h-12 flex items-center rounded-full">
                  <span className="w-fit m-auto self-center text-white text-2xl">
                    {process.icon}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">{process.title}</h1>
                  <p className="text-text-grey text-sm">{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
