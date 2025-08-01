import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import OurValues from '../../components/OurValues/OurValues'
import OurProducts from '../../components/Products/OurProducts'
import Discount from '../../components/Discount/Discount'
import Process from '../../components/Process/Process'
import Testimonial from '../../components/Testimonial/Testimonial'
import Footer from '../../components/Footer/Footer'


const Home = () => {



  return (
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    <OurValues/>
    <OurProducts/>
    <Discount/>
    <Process/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home