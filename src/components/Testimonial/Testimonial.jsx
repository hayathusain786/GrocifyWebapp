import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";
import TestimonialCard from "../Cards/TestimonialCard";
import Heading from "../Heading/Heading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  const customerReviews = [
    {
      id: 1,
      profile: "../src/assets/images/customer4.jpg",
      name: "Jhon Snow",
      profession: "Food Blogger",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ut doloribus! Provident optio dolores dignissimos aspernatur, quas, adipisci ad temporibus dicta sapiente ratione voluptatibus necessitatibus..",
        rating:3,
    },
    {
      id: 2,
      profile: "../src/assets/images/customer3.jpg",
      name: "Arya Stark",
      profession: "Model",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ut doloribus! Provident optio dolores dignissimos aspernatur, quas, adipisci ad temporibus dicta sapiente ratione voluptatibus necessitatibus..",
        rating:2,
    },
    {
      id: 3,
      profile: "../src/assets/images/customer2.jpg",
      name: "Paul Gause",
      profession: "Singer",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ut doloribus! Provident optio dolores dignissimos aspernatur, quas, adipisci ad temporibus dicta sapiente ratione voluptatibus necessitatibus..",
        rating:4,
    },
    {
      id: 4,
      profile: "../src/assets/images/customer1.jpg",
      name: "Sansa Stark",
      profession: "Fashion Designer",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ut doloribus! Provident optio dolores dignissimos aspernatur, quas, adipisci ad temporibus dicta sapiente ratione voluptatibus necessitatibus..",
        rating:5,
    },
  ];

  return (
    <section>
      <div className="my-16">
        <div className="mb-10">
          <Heading spanText="Customers" text="Saying" />
        </div>

        <div className="my-6 flex justify-end">
          <button className="bg-card p-3 mx-1 BackwardBtn hover:bg-secondary hover:text-white rounded-lg">
            <IoIosArrowBack />
          </button>
          <button className="bg-card p-3 mx-1 ForwardBtn hover:bg-secondary hover:text-white rounded-lg">
            <IoIosArrowForward />
          </button>
        </div>

        <div className="">
          <Swiper
            navigation={{ nextEl: ".ForwardBtn", prevEl: ".BackwardBtn" }}
            modules={[Navigation]}
            loop={true}
            breakpoints={
              {
                640:{slidesPerView:1,spaceBetween:20},
                720:{slidesPerView:2,spaceBetween:20},
                1000:{slidesPerView:3,spaceBetween:20},
              }
            }
            className="mySwiper"
          >
            {customerReviews.map((review) => (
              <SwiperSlide key={review.id}>
                <TestimonialCard {...review} key={review.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
