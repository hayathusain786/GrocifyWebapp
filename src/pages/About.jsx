import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const About = () => (
  <section>
    <div className="w-full min-h-screen">
      {/* Banner  */}
      <div className="w-full md:h-52 h-40 bg-[url(../src/assets/images/all-banner.jpg)] bg-center bg-cover">
        <h1 className="bg-text-dark/60 w-full h-full flex items-center justify-center md:text-7xl text-4xl text-white">
          ABOUT
        </h1>
      </div>
      <div className="grid grid-cols-2 pt-16">
        {/* Text Content */}
        <div className="px-6">
          <h1 className="font-semibold text-2xl">
            Best Offers & Best Deals In Our Website!
          </h1>
          <p className="py-6 text-gray-500">
            At Grocefy, we believe grocery shopping should be simple,
            convenient, and stress-free. Our mission is to bring fresh,
            high-quality products straight to your doorstep while saving you
            time and effort.
            <br /> <br />
            From daily essentials to premium grocery items, we carefully curate
            a wide range of products to meet your everyday needs. Whether it’s
            fresh fruits and vegetables, pantry staples, dairy products, or
            household goods, you can trust Grocefy for quality, affordability,
            and reliability.
            <br /> <br />
            What sets us apart is our commitment to customer satisfaction. We
            work closely with trusted suppliers to ensure freshness and quality
            in every order. With our user-friendly platform, secure checkout,
            and fast delivery, shopping for groceries has never been easier.
            <br /> <br />
            At Grocefy, we’re not just delivering groceries—we’re delivering
            comfort, convenience, and care to your home.
          </p>
        </div>
        {/* Image  */}
        <div className="flex items-center">
          <img src="../src/assets/images/banner-img.png" alt="Banner" />
        </div>
      </div>

      <div className="my-16 flex flex-col items-center justify-center bg-gray-100 p-16">
        <h1 className="font-semibold text-2xl">
          Are You Ready For Deals? Exclusive{" "}
          <span className="text-primary">Discounts</span> on Products
        </h1>
        <p className="px-16 text-center pt-6 text-gray-500">
          we bring you unbeatable savings on your favorite grocery items. From
          fresh fruits and vegetables to pantry staples and household
          essentials, enjoy exclusive discounts every day. Why pay more when you
          can shop smarter? Our handpicked deals are designed to give you the
          best value without compromising on quality. Whether you’re stocking up
          for the week or grabbing last-minute items, Grocefy ensures you save
          big on every order. Don’t miss out—explore our offers today and make
          your grocery shopping more rewarding than ever!
        </p>
        <Link to='/Products' className="flex gap-2 items-center pt-10 text-xl text-primary group hover:text-gray-500 duration-300">
        Shop Now <span className="text-3xl  group-hover:scale-150 "> <IoIosArrowRoundForward /> </span>
        </Link>
      </div>
    </div>
  </section>
);

export default About;
